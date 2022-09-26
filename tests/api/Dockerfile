FROM ruby:3.1.2-alpine3.16@sha256:499a310e8fab835ad47ab6251302aba1fd6ba91ebdfa22d621f495a5d0ded170

WORKDIR /app

COPY Gemfile* ./

RUN bundle install

COPY . .
