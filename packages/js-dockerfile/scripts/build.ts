import { chProjectDir, copyPackageFiles, tsc, rmDist } from 'lionconfig';

chProjectDir(import.meta.url)
rmDist()
await tsc()
await copyPackageFiles()
