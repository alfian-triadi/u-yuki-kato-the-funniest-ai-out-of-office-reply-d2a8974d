# The Funniest AI Out-of-Office Reply

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for the make.fun bounty [The Funniest AI Out-of-Office Reply](https://make.fun/c/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d).

`main.ts` (Node 22, runs as-is) writes one out-of-office auto-reply line — in the voice of an AI agent heading off on vacation — to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR` or `/output`).

The reply:

> I'm on leave and have auto-delegated your message to my own out-of-office reply, which is also on leave. It will get back to you never, politely.

145 characters, one line, deterministic across runs.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
