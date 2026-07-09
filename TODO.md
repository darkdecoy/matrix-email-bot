# To Do List

## Quad 1

* Replace Out of date libraries
  * node-mailin
  * node-email-reply-parser
* work with upstream to replace deprecated modules in matrix-bot-sdk
  * request
  * request-promise
* Add self cleaning for bot to purge old records from its database

## Quad 2

* Add logging level configurability
* Add the capture of problem emails
* Convert from Bot to App Service
* Add support for other databases
* Add metric of time between receiving email and matrix message being delivered to server
* Fix issue with attachments

## Quad 3

* Add smtp client functionality
* Add message queue

## Quad 4

TBD

## Errors

```bash
{
  attachments: [],
  headers: Map(0) {},
  headerLines: [
    {
      key: '',
      line: '/home/darkdecoy/Documents/emails/test/test-50.eml'
    }
  ],
  text: '\n',
  textAsHtml: '<p></p>',
  html: '',
  dkim: 'pass',
  spf: 'pass',
  spamScore: 0,
  language: '',
  cc: [],
  from: [],
  to: [],
  connection: {
    id: '89d2b833-8136-4195-8881-d6ad2e06775f',
    secure: false,
    localAddress: '10.255.10.13',
    localPort: 25,
    remoteAddress: '10.255.10.1',
    remotePort: 43374,
    clientHostname: 'altspdlap03',
    openingCommand: 'EHLO',
    hostNameAppearsAs: 'altspdlap03',
    xClient: Map(0) {},
    xForward: Map(0) {},
    transmissionType: 'ESMTP',
    tlsOptions: false,
    envelope: { mailFrom: [Object], rcptTo: [Array] },
    transaction: 1,
    mailPath: '.tmp/89d2b833-8136-4195-8881-d6ad2e06775f'
  },
  envelopeFrom: { address: 'test-50.eml+pdennert@altispeed.com', args: false },
  envelopeTo: [ { address: 'help@altispeed.com', args: false } ]
}

src/DataStore.ts:59:9 - error TS2322: Type 'null' is not assignable to type 'IDbMessage'.

59         return null;
           ~~~~~~

src/EmailProcessor.ts:142:36 - error TS2349: This expression is not callable.
  Type '{ default: ReplyParserRegular & ReplyParserVisibleTextOnly; }' has no call signatures.

142                     textSegments = replyParser(textBody).getFragments().map(f => f.getContent());
                                       ~~~~~~~~~~~

  src/EmailProcessor.ts:6:1
    6 import * as replyParser from "node-email-reply-parser";
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Type originates at this import. A namespace-style import cannot be called or constructed, and will cause a failure at runtime. Consider using a default import or import require here instead.

src/EmailProcessor.ts:144:37 - error TS2349: This expression is not callable.
  Type '{ default: ReplyParserRegular & ReplyParserVisibleTextOnly; }' has no call signatures.

144                     textSegments = [replyParser(textBody, true)];
                                        ~~~~~~~~~~~

  src/EmailProcessor.ts:6:1
    6 import * as replyParser from "node-email-reply-parser";
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Type originates at this import. A namespace-style import cannot be called or constructed, and will cause a failure at runtime. Consider using a default import or import require here instead.

src/MatrixBot.ts:77:46 - error TS2349: This expression is not callable.
  Type 'typeof striptags' has no call signatures.

77             content["body"] = plainFormat || striptags(content.body);
                                                ~~~~~~~~~

  src/MatrixBot.ts:5:1
    5 import * as striptags from "striptags";
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Type originates at this import. A namespace-style import cannot be called or constructed, and will cause a failure at runtime. Consider using a default import or import require here instead.

src/MatrixBot.ts:93:26 - error TS18046: 'error' is of type 'unknown'.

93                 message: error.error,
                            ~~~~~

src/MatrixBot.ts:94:26 - error TS18046: 'error' is of type 'unknown'.

94                 errcode: error.errcode,
                            ~~~~~

src/MatrixBot.ts:95:29 - error TS18046: 'error' is of type 'unknown'.

95                 statusCode: error.statusCode,
                               ~~~~~

src/MatrixBot.ts:96:31 - error TS18046: 'error' is of type 'unknown'.

96                 retryAfterMs: error.retryAfterMs
                                 ~~~~~

src/MatrixBot.ts:126:13 - error TS2454: Variable 'file' is used before being assigned.

126         if (file) {
                ~~~~

src/WebServer.ts:12:20 - error TS2349: This expression is not callable.
  Type 'typeof e' has no call signatures.

12         this.app = express();
                      ~~~~~~~

  src/WebServer.ts:4:1
    4 import * as express from "express";
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Type originates at this import. A namespace-style import cannot be called or constructed, and will cause a failure at runtime. Consider using a default import or import require here instead.

src/config.ts:61:16 - error TS2352: Conversion of type 'ConfigClass' to type 'IConfig' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
  Type 'ConfigClass' is missing the following properties from type 'IConfig': matrix, mail, web, customMailTargets, and 2 more.

61 export default <IConfig>config;
                  ~~~~~~~~~~~~~~~

src/configUtils.ts:11:9 - error TS2322: Type 'null' is not assignable to type 'IAnnotatedRoomConfig'.

11         return null;
           ~~~~~~

src/configUtils.ts:23:35 - error TS2322: Type 'null' is not assignable to type 'IAnnotatedRoomConfig[]'.

23             if (parts.length < 2) return null; // invalid address
                                     ~~~~~~

src/configUtils.ts:35:9 - error TS2322: Type 'null' is not assignable to type 'IAnnotatedRoomConfig[]'.

35         return null;
           ~~~~~~

src/index.ts:28:5 - error TS2554: Expected 2 arguments, but got 1.

28     new RustSdkCryptoStorageProvider(path.join(config.matrix.storagePath, "crypto.db")),
       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  node_modules/matrix-bot-sdk/lib/storage/RustSdkCryptoStorageProvider.d.ts:19:38
    19     constructor(storagePath: string, storageType: RustSdkCryptoStoreType);
                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    An argument for 'storageType' was not provided.


Found 15 errors in 7 files.

Errors  Files
     1  src/DataStore.ts:59
     2  src/EmailProcessor.ts:142
     6  src/MatrixBot.ts:77
     1  src/WebServer.ts:12
     1  src/config.ts:61
     3  src/configUtils.ts:11
     1  src/index.ts:28
```