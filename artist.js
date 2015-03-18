var Model = DS.Model.extend(Timestampable, {
  full_name: DS.attr('title')
});

export default Model;