export default{
	"info": {
		"_postman_id": "8795b6f5-c186-46b2-adda-6135ac804697",
		"name": "React Assignment",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "20313468"
	},
	"item": [
		{
			"name": "Login",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "http://work.8848digitalerp.com/api/method/work.api.login.get_access_api_token?usr=test@gmail.com&pwd=Ascra@123",
					"protocol": "http",
					"host": [
						"work",
						"8848digitalerp",
						"com"
					],
					"path": [
						"api",
						"method",
						"work.api.login.get_access_api_token"
					],
					"query": [
						{
							"key": "usr",
							"value": "test@gmail.com"
						},
						{
							"key": "pwd",
							"value": "Ascra@123"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Login Copy",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"usr\": \"test@gmail.com\",\n    \"pwd\": \"Ascra@123\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://work.8848digitalerp.com/api/method/login",
					"protocol": "http",
					"host": [
						"work",
						"8848digitalerp",
						"com"
					],
					"path": [
						"api",
						"method",
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "Client List",
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [
					{
						"key": "Authorization",
						"value": "token 86ecc77628c9544:bb3daa49eab307e",
						"type": "text"
					},
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"url": {
					"raw": "http://work.8848digitalerp.com/api/resource/Client/",
					"protocol": "http",
					"host": [
						"work",
						"8848digitalerp",
						"com"
					],
					"path": [
						"api",
						"resource",
						"Client",
						""
					]
				}
			},
			"response": []
		},
		{
			"name": "Client Form",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "Authorization",
						"value": "token 86ecc77628c9544:bb3daa49eab307e",
						"type": "text"
					},
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					},
					{
						"key": "Content-Type",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"gender\": \"Male\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://work.8848digitalerp.com/api/resource/Client/Preston Clyde-01",
					"protocol": "http",
					"host": [
						"work",
						"8848digitalerp",
						"com"
					],
					"path": [
						"api",
						"resource",
						"Client",
						"Preston Clyde-01"
					]
				}
			},
			"response": []
		}
	]
}