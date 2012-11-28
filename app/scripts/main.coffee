$ ->
  app = new Application
    dispatcher: _.extend {}, Backbone.Events

  Backbone.history.start
    pushStart: true

  $(document).on 'click', 'a[href]:not([data-external])', (e)->
      href = { prop: $(this).prop('href'), attr: $(this).attr('href') }
      root = location.protocol + '//' + location.host + app.root

      if href.prop.slice(0, root.length) is root
        e.preventDefault()
        Backbone.history.navigate href.attr, true
