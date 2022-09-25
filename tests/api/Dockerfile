FROM ruby:3.1.2-alpine3.16

WORKDIR /app

COPY Gemfile* ./

RUN bundle install

COPY . .
