const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ASSETS =
  "C:/Users/jespe/.cursor/projects/c-Users-jespe-PulsiveLandingpage/assets";

// Order matches user upload: map dark, map light, live, moments/profile, pulse/discussions
const jobs = [
  {
    src: "c__Users_jespe_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_20930-5154d8ef-2117-4fec-b4ed-34b836f099ec.png",
    out: "public/app/map-dark.png",
  },
  {
    src: "c__Users_jespe_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_20932-51f9e231-39e1-473d-b892-dcde04453349.png",
    out: "public/app/map-light.png",
  },
  {
    src: "c__Users_jespe_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_20918-510ce305-278f-4273-b090-0adb1ee3001a.png",
    out: "public/app/live.png",
  },
  {
    src: "c__Users_jespe_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_20924-443579fa-b3c0-43f7-9c7c-e52d2b049b79.png",
    out: "public/app/profile.png",
  },
  {
    src: "c__Users_jespe_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_20922-9dd37d26-5cfd-4b23-aedc-6a0a424fb9f4.png",
    out: "public/app/discussions.png",
  },
];

// Crop Android status bar + system nav, keep app chrome (header + bottom tabs)
const TOP = 42;
const BOTTOM = 52;

async function processOne(job) {
  const input = path.join(ASSETS, job.src);
  const meta = await sharp(input).metadata();
  const width = meta.width;
  const height = meta.height;
  const cropH = height - TOP - BOTTOM;

  await sharp(input)
    .extract({ left: 0, top: TOP, width, height: cropH })
    .png({ compressionLevel: 9 })
    .toFile(job.out);

  const outMeta = await sharp(job.out).metadata();
  console.log(
    `${path.basename(job.out)} ${outMeta.width}x${outMeta.height}`,
  );
}

(async () => {
  for (const job of jobs) {
    if (!fs.existsSync(path.join(ASSETS, job.src))) {
      throw new Error("Missing " + job.src);
    }
    await processOne(job);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
