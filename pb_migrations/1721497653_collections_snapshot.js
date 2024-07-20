migrate((db) => {
  const snapshot = [
    {
      "id": "s72f6jqcqqd8wwx",
      "created": "2024-07-20 14:55:07.882Z",
      "updated": "2024-07-20 17:18:50.970Z",
      "name": "feedbacks",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "wqpgdl8a",
          "name": "image",
          "type": "file",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [],
            "thumbs": [],
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        },
        {
          "system": false,
          "id": "ajsyndgg",
          "name": "make",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "ts1hzrdp",
          "name": "model",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "apkqt8yy",
          "name": "color",
          "type": "text",
          "required": true,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "qgy5fptz",
          "name": "user",
          "type": "relation",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": true,
            "minSelect": null,
            "maxSelect": 1,
            "displayFields": null
          }
        },
        {
          "system": false,
          "id": "srbjekg7",
          "name": "external_id",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "indexes": [],
      "listRule": "@request.auth.id = user.id",
      "viewRule": "@request.auth.id = user.id",
      "createRule": "@request.auth.id != \"\"",
      "updateRule": "@request.auth.id = user.id",
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "_pb_users_auth_",
      "created": "2024-07-20 16:26:58.372Z",
      "updated": "2024-07-20 16:29:06.178Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
          "type": "text",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "presentable": false,
          "unique": false,
          "options": {
            "mimeTypes": [
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif",
              "image/webp"
            ],
            "thumbs": null,
            "maxSelect": 1,
            "maxSize": 5242880,
            "protected": false
          }
        }
      ],
      "indexes": [],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {
        "allowEmailAuth": true,
        "allowOAuth2Auth": true,
        "allowUsernameAuth": true,
        "exceptEmailDomains": null,
        "manageRule": null,
        "minPasswordLength": 8,
        "onlyEmailDomains": null,
        "onlyVerified": false,
        "requireEmail": false
      }
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
