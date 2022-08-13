const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
	name: String,
	email: String,
	encryptedPassword: String,
	userPhoto: String,
	joinDate: String,
	lastAccessed: String,
	lastAccessedLoc: String,
	activity: [
		{
			date: String,
			deviceType: String,
			location: String,
		},
	],
	createdEvents: [
		{
			isTrue: Boolean,
			events: [],
		},
	],
	createdOrganizers: [
		{
			isTrue: Boolean,
			events: [],
		},
	],
	createdVendors: [
		{
			isTrue: Boolean,
			events: [],
		},
	],
	followedOrganizers: [
		{
			isTrue: Boolean,
			events: [],
		},
	],
	favoritedVendors: [
		{
			isTrue: Boolean,
			events: [],
		},
	],
	subscribedEvents: [
		{
			isTrue: Boolean,
			events: [
				{
					id: Number,
					activity: [
						{
							response: String,
							date: String,
						},
					],
				},
			],
		},
	],
})
