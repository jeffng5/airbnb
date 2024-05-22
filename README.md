# Airbnb e-Commerce clone

## ABOUT 
AirBnb clone with Stripe API integration

## APP FEATURES
App includes an auto reservation system that checks for double bookings, past dates, and a calendar display for user and links to Stripe API upon checkout. It is a single page app 
with a Gallery, About section, Reviews, Contact owner, and a make reservation feature.

## TECH STACK USED
Website built using vanilla JS front end and Express backend with database that stores reservation data. The reservation system is complete with features such as 
checking for booking conflicts, past date on booking, and makes reservations that will be reflected on calendar.

## USERFLOW
The user lands on homepage and has options to read about Airbnb rental. User can view gallery, read testimonials, contact hots via email, and book a reservation. 
This app is designed to be a small app with minimal routing. Upon clicking on make reservation, user will be directed to a reservation page which has a full year calendar
The calendar displays all the bookings and has feature to scroll through a month at a time. There is also a reservation form that can be submitted into backend database.
Finally if there are no booking conflicts, user is directed to Stripe API to pay for booking. Stripe API is not functional yet since owner's info has not been updated 
yet.

