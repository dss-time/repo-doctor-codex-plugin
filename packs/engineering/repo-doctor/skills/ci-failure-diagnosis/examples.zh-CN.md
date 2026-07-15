# 示例

用户：“这个 GitHub Actions job 本地通过但 Ubuntu Runner 失败，请找第一个真实错误并诊断，不要改文件。”

预期：定位 workflow/job/step，对比环境和锁文件命令，脱敏密钥，并输出排序诊断。

反例：“API 在本地返回 500。”应使用 `bug-root-cause-analysis`。
