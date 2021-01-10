import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../store/shop/shop.reducer";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import CollectionsOverview from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPage = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionPage;
