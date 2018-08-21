<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
	/**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'orders';

    protected $fillable = [
		'orderNumber', 
	    'orderDate', 
	    'requiredDate',
	    'shippedDate',
	    'status',
	    'comments',
	    'customerNumber'
	];

	function customer(){
		return $this->belongsTo('App\Customer','customerNumber','customerNumber');
	}

	function details(){
		return $this->belongsTo('App\OrderDetail','orderNumber','orderNumber');
	}
}
