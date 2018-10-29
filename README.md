# ifttt-aws-iot

Allow triggering IFTTT maker webhooks from AWS IoT via a Lambda

Deployment:

```bash
claudia create --region REGION --handler index.handler
claudia add-iot-topic-rule --ruleName ifttt_out --sql "SELECT topic() as topic, * FROM 'ifttt-out/+'"
```

Set an environment variable via the aws lambda console for your IFTTT key `iftttkey`