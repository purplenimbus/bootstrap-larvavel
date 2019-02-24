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
	function company(){
		return $this->belongsTo('App\Company');
	}

    function job_status(){
        return $this->belongsTo('App\JobStatus','status_id');
    }

    function job_type(){
        return $this->belongsTo('App\JobType','type_id');
    }
}
