/*                   "transition" : FX time (milliseconds).
 *
 *                   "speed"      : time to show any picture (milliseconds).
 *
 *                   "hover"      : TRUE | FALSE - If is true, you can stop the
 *                                  slider If you leave the pointer in the center
 *                                  of the image.
 *
 *                   "aleatorio"  : TRUE | FALSE - If is true, show pictures randomly.
 *
 *                   "float"      : LETF | NONE | RIGHT - Slider's position.
 *
 *                   "width"      : % | px - Slider's width.
 *
 *                   "height"     : % | px - Slider's height.
 */

$(document).ready(function () {

	if ($("#events-header-bg").length) {
		$("#events-header-bg").resizeSlider({
			"speed": 2000,
			"float": "none",
			"width": "100%",
			"height": "100%",
			"image": {
				"presentacion": {
					"landscape": {
						"url": "url(./img/events-header/photo_2019-04-29_15-43-07.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center center"
					},
					"portrait": {
						"url": "url(./img/events-header/photo_2019-04-29_15-43-07.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right center"
					}
				},

				"presentacion 1": {
					"landscape": {
						"url": "url(./img/events-header/photo_2019-04-29_15-43-18.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center center"
					},
					"portrait": {
						"url": "url(./img/events-header/photo_2019-04-29_15-43-18.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "left center"
					}
				},

				"presentacion 2": {
					"landscape": {
						"url": "url(./img/events-header/photo_2019-04-29_15-43-24.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center center"
					},
					"portrait": {
						"url": "url(./img/events-header/photo_2019-04-29_15-43-24.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right top"
					}
				},

				"presentacion 3": {
					"landscape": {
						"url": "url(./img/events-header/photo_2019-04-29_15-46-42.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center center"
					},
					"portrait": {
						"url": "url(./img/events-header/photo_2019-04-29_15-46-42.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right top"
					}
				}
			}
		});
	}

	if ($("#about-me-header-bg").length) {
		$("#about-me-header-bg").resizeSlider({
			"speed": 2000,
			"float": "none",
			"width": "100%",
			"height": "100%",
			"image": {
				"presentacion": {
					"landscape": {
						"url": "url(./img/about-me-header/photo_2019-03-24_21-50-12.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center center"
					},
					"portrait": {
						"url": "url(./img/about-me-header/photo_2019-03-24_21-50-12.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right center"
					}
				},

				"presentacion 1": {
					"landscape": {
						"url": "url(./img/about-me-header/photo_2019-03-24_21-50-13.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center 10%"
					},
					"portrait": {
						"url": "url(./img/about-me-header/photo_2019-03-24_21-50-13.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "left center"
					}
				},

				"presentacion 2": {
					"landscape": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-34.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center top"
					},
					"portrait": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-34.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right top"
					}
				},

				"presentacion 3": {
					"landscape": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-36.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center 25%"
					},
					"portrait": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-36.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right top"
					}
				},

				"presentacion 4": {
					"landscape": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-37.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center center"
					},
					"portrait": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-37.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right top"
					}
				},

				"presentacion 5": {
					"landscape": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-40.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center top"
					},
					"portrait": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-40.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right top"
					}
				},

				"presentacion 6": {
					"landscape": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-43.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center center"
					},
					"portrait": {
						"url": "url(./img/about-me-header/photo_2019-05-14_00-49-43.jpg)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right top"
					}
				}
			}
		});
	}
	
	if($('#our-partners-bg').length) {
		$("#our-partners-bg").resizeSlider({
			"speed": 2000,
			"float": "none",
			"width": "100%",
			"height": "100%",
			"image": {
				"presentacion": {
					"landscape": {
						"url": "url(./img/our-partners-bg.png)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center center"
					},
					"portrait": {
						"url": "url(./img/our-partners-bg.png)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right center"
					}
				},

				"presentacion 1": {
					"landscape": {
						"url": "url(./img/header-about-me-bg.png)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center 10%"
					},
					"portrait": {
						"url": "url(./img/header-about-me-bg.png)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "left center"
					}
				},

				"presentacion 2": {
					"landscape": {
						"url": "url(./img/header-bg.png)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "center top"
					},
					"portrait": {
						"url": "url(./img/header-bg.png)",
						"size": "cover",
						"repeat": "no-repeat",
						"position": "right top"
					}
				}
			}
		});
	}

});
