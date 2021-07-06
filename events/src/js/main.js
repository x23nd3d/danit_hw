$(function () {
	
	$(window).scroll(function() {
		$('.navbar').css({'padding': (window.pageYOffset) ? '10px 0' : '30px 0'});
	});
	
	$('#search-events').click(function (e) {
		e.preventDefault();
		goToElem($(this));
	});

	if ($('#top-gallery').length) {
		$('#top-gallery').slick({
			centerMode: true,
			centerPadding: '10px',
			slidesToShow: 3,
			arrows: false,
			focusOnSelect: true,
			autoplay: true,
			autoplaySpeed: 2000
		});
	}

	if ($('.event').length) {
		$('.event').each(function () {
			let activeElem = $(this).clone();
			activeElem.css({
				'position': 'absolute',
				'top': '0',
				'left': '0',
				'display': 'none',
				'opacity': '0'
			});
			$(this).append(activeElem);
		});

		$('.event').click(function () {
			$('.event.active').removeClass('active').animate({
				'opacity': '0'
			}, 500, function () {
				$(this).hide();
			});
			$(this).find('.event').addClass('active').show(0, function () {
				$(this).animate({
					'opacity': '1'
				}, 300);
			});
		});

		$(document).click(function (e) {
			let elem = $(".event");
			if (!elem.is(e.target) && elem.has(e.target).length === 0) {
				$('.event.active').removeClass('active').animate({
					'opacity': '0'
				}, 500, function () {
					$(this).hide();
				});
			}
		});

		$('.event__readmore').click(function (e) {
			e.preventDefault();
		});
	}
	
	/*_____Advertising_____*/

	if ($('#advertising-slider').length) {
		$('#advertising-slider').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			speed: 1000,
			arrows: false,
			dots: true
		});
	}

	/*_____Calendar_____*/

	function createCalendar(year, month) {
		document.getElementById('calendar').innerHTML = '';

		let date = new Date(year, month);

		let table = '<tr class="month-calendar__heading"><th>mon</th><th>tue</th><th>wed</th><th>thu</th><th>fri</th><th>sat</th><th>sun</th><tr>';

		let emptyCell = 0;
		let dayNumber = getDayN(date) - 1;
		let prevMonthLastDay = new Date(year, month, 0);

		for (let i = 0; i < getDayN(date); i++) {
			let prevDay = prevMonthLastDay.getDate() - dayNumber;
			table += '<td class="month-calendar__other-days">' + prevDay + '</td>';
			emptyCell++;
			dayNumber--;
		}

		while (date.getMonth() == month) {
			table += '<td>' + date.getDate() + '</td>';

			if (getDayN(date) % 7 == 6) {
				table += '</tr><tr>';
			}

			date.setDate(date.getDate() + 1);
		}

		while (date.getDay() != 1) {
			table += '<td class="month-calendar__other-days">' + date.getDate() + '</td>';
			date.setDate(date.getDate() + 1);
		}

		table += '</tr>';

		document.getElementById('calendar').innerHTML += table;

		function getDayN(d) {
			let day = d.getDay();
			if (day == 0) day = 7;
			return day - 1;
		}
	}

	if ($('.month__item').length) {
		let currentDate = new Date();
		let currentYear = currentDate.getFullYear();
		let currentMonth = currentDate.getMonth();

		$('.month__item').click(function () {
			switchCalendar($(this));
		});

		switchCalendar($('.month__item').eq(currentMonth));

		function switchCalendar(elem) {
			elem.siblings().removeClass('active');
			elem.toggleClass('active');
			let monthNumber = elem.attr('data-month');
			createCalendar(currentYear, monthNumber);
		}
	}

	/*_____Events_____*/

	if ($('.calendar').length) {
		$('#calendar-button, #calendar-cancel').click(function (e) {
			e.preventDefault();
			$('.event.active').hide('slow').removeClass('active');
			$('#full-calendar').slideToggle('slow');
		});

		$('#calendar-filter').click(function (e) {
			e.preventDefault();
			filterByMonth('full-gallery');
			$('.event.active').hide('slow').removeClass('active');
			$('#full-calendar').slideToggle('slow');
		});

		$('#events-filter').click(function () {
			$('.event.active').hide('slow').removeClass('active');
			$('#events-filter-list').slideToggle('fast');
		});

		$(document).click(function (e) {
			let elem = $("#calendar-button, #full-calendar, #calendar-icon");
			if (!elem.is(e.target) && elem.has(e.target).length === 0) {
				$('#full-calendar').slideUp('slow');
			}
		});

		$(document).click(function (e) {
			let elem = $("#events-filter, #events-filter-list");
			if (!elem.is(e.target) && elem.has(e.target).length === 0) {
				$('#events-filter-list').slideUp('slow');
			}
		});
	}

	if ($('#load-more-events').length) {
		$('#load-more-events').click(function (e) {
			e.preventDefault();
			showElements('full-gallery');
			$(this).toggleClass('active');
			$('#roll-up-events').toggleClass('active');
		});

		$('#roll-up-events').click(function (e) {
			e.preventDefault();
			hideElements('full-gallery');
			$('.event.active').hide('slow').removeClass('active');
			$(this).toggleClass('active');
		});

		$('#full-gallery').children().addClass('selected');
		hideElements('full-gallery');
	}

	function hideElements(id) {
		$(`#${id}`).find('.selected').slideUp('slow').filter(function (index) {
			(index <= 5) ? $('#load-more-events').removeClass('active'): $('#load-more-events').addClass('active');
			return (index <= 5);
		}).slideDown('slow');
	}

	function showElements(id) {
		$(`#${id}`).find('.selected').filter(function (index) {
			return (index > 5);
		}).slideDown('slow');
	}

	function filterByMonth(id) {
		const allElems = $(`#${id}`).children();
		const item = $('.month__item.active');
		let selectedMonth = +item.attr('data-month') + 1;
		console.log('allElems: ' + allElems);

		allElems.filter(function (i, elem) {
			let date = $(this).find('._date').html().split(' ');
			console.log(i + ': ' + date);
			let month = +date[0].split('.')[1];
			(month == selectedMonth) ? $(this).addClass('selected'): $(this).removeClass('selected').hide('slow');
		});
		hideElements(id);
	}

	/*_____Go to element_____*/

	$("#events-want-event-btn").click(function (event) {
		event.preventDefault();
		goToElem($(this));
	});

	if ($('#full-calendar').length) {
		$("#calendar-icon").click(function (event) {
			event.preventDefault();
			goToElem($(this));
			$('#full-calendar').slideDown('slow');
		});
	}

	function goToElem(thisEl) {
		let id = thisEl.attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	}

	/*_____Instagram gallery_____*/

	if ($('#insta-gallery').length) {
		$('#insta-gallery').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1
		});

		let imgHover = '<div class="insta-photos__info"><p class="insta-photos__text">Я змінилась... І хочу, щоб ви змінились зі мною..</p><p class="insta-photos__text"><span class="insta-photos__icon"></span><span class="insta-photos__likes">5431</span></p></div>';

		$('.insta-photos__item').append(imgHover);

		$('.insta-photos__item').hover(
			function () {
				$(this).find('.insta-photos__info').css({
					'opacity': '1'
				});
			},
			function () {
				$(this).find('.insta-photos__info').css({
					'opacity': '0'
				});
			}
		);
	}

	/*_____Contacts_____*/

	if ($("#write-me-btn").length) {
		$("#write-me-btn").click(function (event) {
			event.preventDefault();
			goToElem($(this));
		});
	}


	if ($('.top-discounts').length) {
		$('.top-discounts .event').click(function () {
			$('.top-discounts .slick-list').animate({
				'height': '700px'
			}, 'slow');
		});
		$(document).click(function (e) {
			let area = $('.top-discounts .event');
			if (!area.is(e.target) && area.has(e.target).length === 0) {
				$('.top-discounts .slick-list').animate({
					'height': '450px'
				}, 'slow');
			}
		});
	}

	/*_____Feedbacks_____*/

	if ($('#feedback').length) {
		$('#feedback-btn').click(function (e) {
			e.preventDefault();
			showNextFeedback();
		});
	}

	function showNextFeedback() {
		let item = $('.feedbacks__comment.active');
		item.hide('slow').removeClass('active');
		if (item.next('.feedbacks__comment').length) {
			item.next('.feedbacks__comment').show('slow').addClass('active');
		} else {
			$('.feedbacks__comment').eq(0).show('slow').addClass('active');
		}
	}

	if ($('.show_popup').length) {
		$('.show_popup').click(function (e) {
			let popup_id = $($(this).attr("href"));
			$(popup_id).show(0, function () {
				$(this).animate({
					'display': 'flex',
					'opacity': '1'
				}, 500);
			});
		})
		$($('.overlay_popup')).click(function (e) {
			if ($(this).is(e.target) || $('.popup-content').is(e.target)) {
				$('.overlay_popup').animate({
					'opacity': '0'
				}, 500, function () {
					$(this).hide();
				});
			}
		});
	}
	
});
