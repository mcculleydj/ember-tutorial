import Component from '@glimmer/component'

export default class RentalFiltersComponent extends Component {
  get results() {
    const { rentals, query } = this.args

    return query
      ? rentals.filter(r => {
          return (
            r.title.toLowerCase().includes(query.toLowerCase()) ||
            r.city.toLowerCase().includes(query.toLowerCase()) ||
            r.category.toLowerCase().includes(query.toLowerCase()) ||
            r.type.toLowerCase().includes(query.toLowerCase()) ||
            r.description.toLowerCase().includes(query.toLowerCase())
          )
        })
      : rentals
  }
}
