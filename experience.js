(function () {
    // Remove the no-js fallback as soon as scripting is available
    document.documentElement.classList.remove('no-js');

    document.addEventListener('DOMContentLoaded', function () {
        // Expandable cards: click to open; click again, click outside or press Esc to close
        function setupCards(listSelector, rowSelector, headSelector) {
            var list = document.querySelector(listSelector);
            var rows = Array.prototype.slice.call(document.querySelectorAll(rowSelector));

            function openRow(target) {
                rows.forEach(function (row) {
                    var on = row === target;
                    row.setAttribute('data-open', on ? 'yes' : 'no');
                    row.querySelector(headSelector).setAttribute('aria-expanded', on ? 'true' : 'false');
                });
                if (list) { list.setAttribute('data-any', target ? 'yes' : 'no'); }
            }

            function openedRow() {
                return rows.filter(function (row) { return row.getAttribute('data-open') === 'yes'; })[0];
            }

            rows.forEach(function (row) {
                row.querySelector(headSelector).addEventListener('click', function () {
                    openRow(row.getAttribute('data-open') === 'yes' ? null : row);
                });
            });

            // Esc closes the open card from anywhere on the page
            document.addEventListener('keydown', function (event) {
                var open = openedRow();
                if (event.key === 'Escape' && open) {
                    var hadFocus = open.contains(document.activeElement);
                    openRow(null);
                    if (hadFocus) { open.querySelector(headSelector).focus(); }
                }
            });

            // A click outside the open card closes it
            document.addEventListener('click', function (event) {
                var open = openedRow();
                if (open && !open.contains(event.target)) { openRow(null); }
            });
        }

        setupCards('.exps', '.exp-row', '.exp-head');
        setupCards('.projs', '.pj-row', '.pj-head');
    });
})();
