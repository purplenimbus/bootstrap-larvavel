<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid as Uuid;

class Job extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'author_id',
        'category_id',
        'company_id',
		'description',
		'meta',
		'status_id',
		'title',
        'type_id',
    ];

    /**
     * The attributes that are hidden.
     *
     * @var array
     */
    protected $hidden = [
        'author_id',
        'category_id',
        'company_id',
        'status_id',
        'type_id',
    ];

    /**
     * Cast meta property to array
     *
     * @var array
     */
    protected $casts = [
        'meta' => 'object',
    ];

    /**
	 *  Setup model event hooks
	 */
	public static function boot()
	{
		parent::boot();
		self::creating(function ($model) {
			$model->uuid = (string) Uuid::generate(4);
		});
	}

	/* Relationships */

    function author(){
        return $this->belongsTo('App\User');
    }

    function category(){
        return $this->belongsTo('App\JobCategory');
    }

	function company(){
		return $this->belongsTo('App\Company');
	}

    function status(){
        return $this->belongsTo('App\JobStatus','status_id');
    }

    function type(){
        return $this->belongsTo('App\JobType','type_id');
    }
}
