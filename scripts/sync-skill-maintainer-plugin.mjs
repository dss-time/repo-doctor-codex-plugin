import path from "node:path";
import { syncPackPlugin } from "./sync-pack-plugin.mjs";

const root = process.cwd();
const interfaces = {
  "skill-authoring": {
    shortDescription: "按仓库唯一脚手架工程化创建一个双语可发布 Skill",
    defaultPrompt: "使用 $skill-authoring 按当前仓库规范创建一个边界明确的双语 Skill。",
  },
  "skill-quality-audit": {
    shortDescription: "只读审计 Skill、Pack 或插件的结构、触发、安全与发布质量",
    defaultPrompt: "使用 $skill-quality-audit 只读审计这个 Skill 的发布质量，不要自动修改文件。",
  },
};

syncPackPlugin({
  packRoot: path.join(root, "packs", "engineering", "skill-maintainer"),
  pluginRoot: path.join(root, "plugins", "skill-maintainer"),
  interfaces,
});
