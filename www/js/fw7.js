var self = this,
    CONSTANTS = {
      VIEW : {
        MAIN : {
          CLASSNAME : '.view-main'
        }
      },
      SIDEBAR : {
        LOCATIONS : {
          RIGHT : 'right',
          LEFT : 'left'
        }
      }
    },
    defaultViewParameters = {
      domCache : true
    };

this.Fw7Proto = {
  app : new Framework7({
    animateNavBackIcon: true,
    pushState: true,
    uniqueHistory : true,
    reloadPages : true
  })
};

this.mainView = this.Fw7Proto.app.addView(CONSTANTS.VIEW.MAIN.CLASSNAME, defaultViewParameters);

this.methods = {

  /**
   * go() is a method to load a page with pageName parameter
   *
   * @param {string} pageName
  */
  go : function (pageName) {
    self.mainView.router.load({pageName : pageName});
  },

  /**
   * goWithParams() is a method to load a page with pageName parameter
   *
   * @param {string} pageName
   * @param {object} query
   * TODO : The other parameters will be supported like content, etc.
  */
  goWithParams : function (pageName, query) {
    self.mainView.router.load(Object.assign({}, {pageName : pageName, query : query}));
  },

  /**
   * goToUrl() is a method to load a page with url pattern
   *
   * @param {string} url
  */
  goToUrl : function (url) {
    self.mainView.router.loadPage(url);
  },

  /**
   * loadContent() is a method to load a content as string
   *
   * @param {string} content
  */
  loadContent : function (content) {
    self.mainView.router.loadContent(content);
  },

  /**
   * reloadPage() is a method to load a page with pageName parameter
   *
   * @param {string} url
  */
  reloadPage : function (url) {
    self.mainView.router.reloadPage(url);
  },

  /**
   * reloadContent() is a method to load a content
   *
   * @param {string} or {HTMLElement} content
  */
  reloadContent : function (content) {
    self.mainView.router.reloadContent(content);
  },

  /**
   * reloadPreviousPage() is a method to load the previous page
   *
   * @param {string} url
  */
  reloadPreviousPage : function (url) {
    self.mainView.router.reloadPreviousPage(url);
  },

  /**
   * reloadPreviousContent() is a method to load a content with content
   *
   * @param {string} or {HTMLElement} content
  */
  reloadPreviousContent : function (content) {
    self.mainView.router.reloadPreviousContent(content);
  },

  /**
   * refreshPage() is a method to refresh the current page
   *
   * @noparam
  */
  refreshPage : function () {
    self.mainView.router.refreshPage();
  },

  /**
   * refreshPreviousPage() is a method to refresh the previous page
   *
   * @param {string} pageName
  */
  refreshPreviousPage : function () {
    self.mainView.router.refreshPreviousPage();
  },

  /**
   * cachePage() is a method to make the page cached
   *
   * @param {string} pageName
  */
  cachePage : function (pageName) {
    $('[data-page="'+pageName+'"]').addClass('cached');
  },

  /**
   * removeCachePage() is a method to make the page uncached
   *
   * @param {string} pageName
  */
  unCachePage : function (pageName) {
    $('[data-page="'+pageName+'"]').removeClass('cached');
  },

  /**
   * removePageFromHistory() is a method to remove specified page from history
   *
   * @param {string} pageName
  */
  removePageFromHistory : function (pageName) {
    for (var pageIndex = 0, len = self.mainView.history.length; pageIndex < len; pageIndex++) {
      if (self.mainView.history[pageIndex] === '#'+pageName) {
        self.mainView.history.splice(pageIndex, 1);
      }
    }
    return this;
  },

  /**
   * removePageFromDom() is a method to remove specified page's DOM
   *
   * @param {string} pageName
  */
  removePageFromDom : function (pageName) {
     $('.page-on-left[data-page="'+pageName+'"]').remove();
     return this;
  },

  /**
   * getActivePageName() is a method to get the current page name
   *
   * @noparam
  */
  getActivePageName : function () {
    return self.mainView.activePage.name;
  },

  /**
   * openPanel() is a method to open the specified content sidebar
   *
   * @param {string} location (right/left)
  */
  openPanel : function (location) {
    self.Fw7Proto.app.openPanel(location);
  },

  /**
   * openRightPanel() is a method to open the right content sidebar
   *
   * @noparam
  */
  openRightPanel : function () {
    self.Fw7Proto.app.openPanel(CONSTANTS.SIDEBAR.LOCATIONS.RIGHT);
  },

  /**
   * openLeftPanel() is a method to open the left content sidebar
   *
   * @noparam
  */
  openLeftPanel : function () {
    self.Fw7Proto.app.openPanel(CONSTANTS.SIDEBAR.LOCATIONS.LEFT);
  },

  /**
   * closePanel() is a method to close the whole, right and left sidebars
   *
   * @noparam
  */
  closePanel : function () {
    self.Fw7Proto.app.closePanel();
  },

  /**
   * showTab() is a method to show the tab content
   *
   * @param {string} tabName
  */
  showTab : function (tabName) {
    self.Fw7Proto.app.showTab(tabName);
  },

};

this.f7 = {
  app : this.Fw7Proto.app,
  mainView : this.mainView,
  $$ : Dom7,
  go : this.methods.go,
  goWithParams : this.methods.goWithParams,
  goToUrl : this.methods.goToUrl,
  loadContent : this.methods.loadContent,
  reloadPage : this.methods.reloadPage,
  reloadContent : this.methods.reloadContent,
  reloadPreviousPage : this.methods.reloadPreviousPage,
  reloadPreviousContent : this.methods.reloadPreviousContent,
  refreshPage : this.methods.refreshPage,
  refreshPreviousPage : this.methods.refreshPreviousPage,
  cachePage : this.methods.cachePage,
  unCachePage : this.methods.unCachePage,
  removePageFromHistory : this.methods.removePageFromHistory,
  removePageFromDom : this.methods.removePageFromDom,
  getActivePageName : this.methods.getActivePageName,
  openPanel : this.methods.openPanel,
  openRightPanel : this.methods.openRightPanel,
  openLeftPanel : this.methods.openLeftPanel,
  closePanel : this.methods.closePanel,
  showTab : this.methods.showTab
};

this.$get = function() {
  return this.f7;
};