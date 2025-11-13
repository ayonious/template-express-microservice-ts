<h1 align="center">template-express-microservice-ts</h1>
<h3 align="center">🖥️🍭A bare min express microservice Template in Typescript</h3>
<p align="center">
  <a href="https://github.com/ayonious/template-express-microservice-ts/actions">
    <img alt="CI" src="https://github.com/ayonious/template-express-microservice-ts/workflows/CI/badge.svg">
  </a>
</p>

# 🧐 Whats inside

1. Express endpoint
2. Added Plugins to validate input (using zod)
3. Testing with jest with:

- endpoint testing with supertest
- normal unit test
- Test results matching with snapshots
- Adding plugins to test input validity
- Endpoint mocking

4. Swagger documentation
5. Lint and prettier

# 🏃‍♂️ Run command

```bash
yarn
yarn start
curl "http://localhost:3000/sum?val=10"
```

# 📚 API Documentation

Once the server is running, you can access the interactive Swagger API documentation at:

```
http://localhost:3000/api-docs
```

# 🧪 Run test

```bash
yarn test
```
