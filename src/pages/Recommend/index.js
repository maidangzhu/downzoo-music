import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getRecommendList, getBannerList} from '../../store/recommend/actionCreators';
import {forceCheck} from 'react-lazyload';

import RecommendList from '../../components/list';
import Slider from '../../components/slider';
import Scroll from '../../components/scroll';
import Loading from '../../baseUI/loading/index';

import {Content} from './style';

const Recommend = (props) => {
  const {bannerList, recommendList, enterLoading} = props;
  const {getBannerDataDispatch, getRecommendListDataDispatch} = props;

  useEffect(() => {
    // 如果页面有数据，则不发请求
    //immutable 数据结构中长度属性 size
    if (!bannerList.size) {
      getBannerDataDispatch();
    }
    if (!recommendList.size) {
      getRecommendListDataDispatch();
    }
  }, [bannerList.size, recommendList.size, getBannerDataDispatch, getRecommendListDataDispatch]);

  const bannerListJS = bannerList ? bannerList.toJS() : [];
  const recommendListJS = recommendList ? recommendList.toJS() : [];

  return (
    <Content>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerListJS}/>
          <RecommendList recommendList={recommendListJS}/>
        </div>
      </Scroll>
      {enterLoading ? <Loading/> : null}
    </Content>
  )
}

const mapStateToProps = state => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  enterLoading: state.getIn(['recommend', 'enterLoading'])
})

const mapDispatchToProps = dispatch => {
  return {
    getBannerDataDispatch() {
      dispatch(getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(getRecommendList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));
