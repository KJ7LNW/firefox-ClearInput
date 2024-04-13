/*
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Library General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 *
 *  This browser extension is Copyright (C) 2024 Eric Wheeler, KJ7LNW
 */


/*
 * Thanks @BalusC!
 * https://stackoverflow.com/a/2803922/14055985
 *
 * See also:
 * 	https://bugzilla.mozilla.org/show_bug.cgi?id=1654288
 * 	https://superuser.com/questions/440589/how-to-add-a-reset-button-to-every-html-input-field-in-firefox
 * 	https://stackoverflow.com/questions/2803532/how-do-i-put-a-clear-button-inside-my-html-text-input-box-like-the-iphone-does
 */
$(document).ready(function() {
	$(':input').each(function(index) {
			console.log($(this).prop('type'));
			if (($(this).prop('type') == 'text' || $(this).prop('type') == 'search') &&
				!$(this).is(":hidden"))
			{
				$(this).wrap('<span class="__clear_input_icon"></span>').after($('<span>x</span>').click(function() {
					$(this).prev('input').val('').trigger('change').focus();
				}))
			}
	})
});
