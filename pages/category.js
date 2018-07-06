import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import PostList from "../components/ui/PostList";
import wpapi from "../services/wpapi";
import Pagination from "../components/ui/Pagination";

class categoryPage extends React.Component {
  static async getInitialProps({ query }) {
    // <Pagination /> component add a "page" argument to url
    const currentPage = query.page ? query.page : 1;
    const categories = await wpapi.categories().slug(query.slug);
    const category = categories[0];
    const posts = await wpapi
      .posts()
      .categories(category.id)
      .embed()
      .perPage(10)
      .page(currentPage);
    return { category, posts, paging: posts._paging };
  }
  render() {
    return (
      <DefaultLayout>
        <h1>{this.props.category.name}</h1>
        <PostList posts={this.props.posts} />
        <Pagination totalPages={this.props.paging.totalPages} />
      </DefaultLayout>
    );
  }
}

export default withRouter(categoryPage);
