import { Routes } from "@angular/router";
import { LoginComponent } from "./app/login/login.component";
import { SignupComponent } from "./app/signup/signup.component";
import { HomeComponent } from "./app/home/home.component";
import { Component } from "@angular/core";

const routeConfig: Routes= [{
    path: "",
    component: LoginComponent,
    title: "Login Page"   
    }
];

export default routeConfig;