import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './product.reducer';

export const ProductDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const productEntity = useAppSelector(state => state.product.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productDetailsHeading">
          <Translate contentKey="clothesApp.product.detail.title">Product</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{productEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="clothesApp.product.name">Name</Translate>
            </span>
          </dt>
          <dd>{productEntity.name}</dd>
          <dt>
            <span id="createdDate">
              <Translate contentKey="clothesApp.product.createdDate">Created Date</Translate>
            </span>
          </dt>
          <dd>
            {productEntity.createdDate ? <TextFormat value={productEntity.createdDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="productSize">
              <Translate contentKey="clothesApp.product.productSize">Product Size</Translate>
            </span>
          </dt>
          <dd>{productEntity.productSize}</dd>
          <dt>
            <span id="price">
              <Translate contentKey="clothesApp.product.price">Price</Translate>
            </span>
          </dt>
          <dd>{productEntity.price}</dd>
          <dt>
            <span id="gender">
              <Translate contentKey="clothesApp.product.gender">Gender</Translate>
            </span>
          </dt>
          <dd>{productEntity.gender}</dd>
          <dt>
            <span id="color">
              <Translate contentKey="clothesApp.product.color">Color</Translate>
            </span>
          </dt>
          <dd>{productEntity.color}</dd>
          <dt>
            <span id="lastModifiedDate">
              <Translate contentKey="clothesApp.product.lastModifiedDate">Last Modified Date</Translate>
            </span>
          </dt>
          <dd>
            {productEntity.lastModifiedDate ? (
              <TextFormat value={productEntity.lastModifiedDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="createdBy">
              <Translate contentKey="clothesApp.product.createdBy">Created By</Translate>
            </span>
          </dt>
          <dd>{productEntity.createdBy}</dd>
          <dt>
            <span id="lastModifiedBy">
              <Translate contentKey="clothesApp.product.lastModifiedBy">Last Modified By</Translate>
            </span>
          </dt>
          <dd>{productEntity.lastModifiedBy}</dd>
          <dt>
            <Translate contentKey="clothesApp.product.category">Category</Translate>
          </dt>
          <dd>{productEntity.category ? productEntity.category.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/product" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/product/${productEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductDetail;
