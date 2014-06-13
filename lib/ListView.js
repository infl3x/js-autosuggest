var ViewCollection = require('view-collection');

module.exports = ViewCollection.extend({

  /**
   * Initialise the view
   */
  init: function() {
    ViewCollection.prototype.init.call(this);
    this._selectedIndex = null;
  },

  /**
   * Get whether the view is hidden
   * @returns   {boolean}
   */
  isHidden: function() {
    return this.el.classList.contains('is-hidden');
  },

  /**
   * Hide the view
   * @returns {exports}
   */
	hide: function() {
		this.el.classList.add('is-hidden');
		return this;
	},

  /**
   * Shows the view
   * @returns {exports}
   */
	show: function() {
		this.el.classList.remove('is-hidden');
		return this;
	},

  /**
   * Get the selected index
   * @returns {int|null}
   */
  getSelectedIndex: function() {
    return this._selectedIndex;
  },

  /**
   * Selects the view at the specified index
   * @param   {int} index
   * @returns {exports}
   */
  select: function(index) {

    //check index
    if (index !== null && (index < 0 || index >= this.count())) {
      throw new Error('Index out of bounds');
    }

    //unset the old selected view
    if (this._selectedIndex !== null) {
      this.at(this._selectedIndex).el.classList.remove('is-selected');
    }

    //remember the index
    this._selectedIndex = index;

    //set the new selected view
    if (this._selectedIndex !== null) {
      this.at(this._selectedIndex).el.classList.add('is-selected');
    }

    return this;
  },

  /**
   * Get whether the list has a "previous" item
   * @returns {boolean}
   */
  hasPrevious: function() {
    return this.getSelectedIndex() !== null && this.count() > 0 && this.getSelectedIndex() !== 0;
  },

  /**
   * Select the "previous" item
   * @returns {exports}
   */
  selectPrevious: function() {
    this.select(this.getSelectedIndex()-1);
  },

  /**
   * Get whether the list has a "next" item
   * @returns {boolean}
   */
  hasNext: function() {
    return this.getSelectedIndex() !== null && this.count() > 0 && this.getSelectedIndex() !== this.count()-1;
  },

  /**
   * Select the "next" item
   * @returns {exports}
   */
  selectNext: function() {
    this.select(this.getSelectedIndex()+1);
  }

  //TODO: handle removal of the selected index

});