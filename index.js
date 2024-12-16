const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/total-distance', (req, res) => {
  //parseFloat is a function that converts any string into number
  //req.query.? is received as a string
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let total_distance = distance1 + distance2;
  res.send(total_distance.toString());
});

app.get('/total-time', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let total_time = time1 + time2 + time3;
  res.send(total_time.toString());
});

app.get('/average-speed', (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);
  let averageSpeed = totalDistance / totalTime;
  res.send(averageSpeed.toString());
});

app.get('/eta', (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);
  let eta = distance / speed;
  res.send(eta.toString());
});

app.get('/total-calories', (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMin = parseFloat(req.query.caloriesPerMin);
  let totalCalories = (duration1 + duration2) * caloriesPerMin;
  res.send(totalCalories.toString());
});

app.get('/interest-earned', (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let interest = (principal * rate * time) / 100;
  res.send(interest.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
