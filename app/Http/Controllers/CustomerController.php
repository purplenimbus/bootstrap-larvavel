<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer as Customer;

class CustomerController extends Controller
{
    public function getCustomers(Request $request){
    	return Customer::paginate(10);
    }
}
