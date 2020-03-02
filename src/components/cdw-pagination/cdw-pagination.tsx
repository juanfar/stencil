import { Component, h, State } from '@stencil/core';

interface User {
  id: number,
  first_name: string,
  last_name: string,
}


@Component({
  tag: 'cdw-pagination',
})
export class CdwPagination {
  
  @State() users: User[] = [];
  @State() pages: number;
  @State() page: number = 1;

  componentWillLoad() {
    this.fetchUsers();
  }

  fetchUsers(page: number = 1) {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(json => {
        this.users = json.data;
        this.pages = json.total_pages;
        this.page = json.page;
      });
  }

  changePage(event, page) {
    event.preventDefault();
    this.fetchUsers(page);
  }

  pagination() {
    let pages = [];
    for (let i = 1; i <= this.pages; i++) {
      if (i === this.pages) {
        pages.push(<li class="page-item active"><a class="page-link" href="#">{i}</a></li>);
      }
      else {
        pages.push(<li class="page-item"><a class="page-link" href="#" onClick={(event) => this.changePage(event, i)}>{i}</a></li>);
      }
    }
    return pages;
  }

  render() {
    return (
      <div class="col-12" id="cdw-pagination">
        <h2 class="text-center text-muted"></h2>
        <table class="table">
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
          {this.users.map((user: User) => 
            <tr>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
            </tr>
          )}
        </table>
        <ul class="pagination">
          {this.pagination()}
        </ul>
      </div>
    );
  }
}