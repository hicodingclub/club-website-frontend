
hg angular-gen -m emailing -o src/app ../../club-website-backend/node_modules/@hicoder/express-emailing/model.js
hg angular-gen -m files -o src/app ../../club-website-backend/node_modules/@hicoder/express-file-server/model/sample.admin.js
hg angular-gen -m access -o src/app ../../club-website-backend/node_modules/@hicoder/express-auth-server/authz/model.access.js
hg angular-gen -m roles -o src/app ../../club-website-backend/node_modules/@hicoder/express-auth-server/models/model.role.default.js

hg angular-gen -m publicinfo -o src/app ../../club-website-backend/models/publicInfo/index.js
hg angular-gen -m teachforlife -o src/app ../../club-website-backend/models/teachforlife/index.js
hg angular-gen -m summerprogram -o src/app ../../club-website-backend/models/summerprogram/index.js
