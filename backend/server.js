"use strict";
// This is your test secret API key.
const stripe = require('stripe')('sk_test_51OlENfChg3YLxEh2jsQiHZLM36KeBDQOGhXFvFUsjsObXCoT7EjrbYTOTqvfzvNzxe7fmN9gKVQTvj1SGGCf42ck00KK4U7MsM');
const express = require('express');
const app = require('./app')
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:4242';



app.listen(4242, () => console.log('Running on port 4242'));

