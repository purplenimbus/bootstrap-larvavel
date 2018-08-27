<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer as Customer;
use App\Product as Product;
use App\Order as Order;

class CustomerController extends Controller
{
    public function getCustomers(Request $request){
    	return Customer::paginate(10);
    }

    public function getOrders(Request $request){
    	$query = [];
		
		if($request->has('customerNumber')){
			array_push($query,['customerNumber', '=', $request->customerNumber]);
		}

		if(sizeof($query)){
			return Order::with(['details.product'])->where($query)->paginate(10);
		}

    	return Order::with(['details.product'])->paginate(10);
    }

    public function getProducts(Request $request){

    	return Product::paginate(10);
    }
}
