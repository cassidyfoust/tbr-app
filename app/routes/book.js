import Route from '@ember/routing/route';

export default class BookRoute extends Route {
  async model(params) {
    let response = await fetch(`/api/books/${params.book_id}.json`);
    let { data } = await response.json();
    return data;
  }
}
