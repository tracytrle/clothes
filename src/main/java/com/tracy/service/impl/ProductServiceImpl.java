package com.tracy.service.impl;

import com.tracy.domain.Product;
import com.tracy.repository.ProductRepository;
import com.tracy.service.ProductService;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link Product}.
 */
@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    private final Logger log = LoggerFactory.getLogger(ProductServiceImpl.class);

    private final ProductRepository productRepository;

    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product save(Product product) {
        log.debug("Request to save Product : {}", product);
        return productRepository.save(product);
    }

    @Override
    public Product update(Product product) {
        log.debug("Request to update Product : {}", product);
        return productRepository.save(product);
    }

    @Override
    public Optional<Product> partialUpdate(Product product) {
        log.debug("Request to partially update Product : {}", product);

        return productRepository
            .findById(product.getId())
            .map(existingProduct -> {
                if (product.getName() != null) {
                    existingProduct.setName(product.getName());
                }
                if (product.getCreatedDate() != null) {
                    existingProduct.setCreatedDate(product.getCreatedDate());
                }
                if (product.getProductSize() != null) {
                    existingProduct.setProductSize(product.getProductSize());
                }
                if (product.getPrice() != null) {
                    existingProduct.setPrice(product.getPrice());
                }
                if (product.getGender() != null) {
                    existingProduct.setGender(product.getGender());
                }
                if (product.getColor() != null) {
                    existingProduct.setColor(product.getColor());
                }
                if (product.getLastModifiedDate() != null) {
                    existingProduct.setLastModifiedDate(product.getLastModifiedDate());
                }
                if (product.getCreatedBy() != null) {
                    existingProduct.setCreatedBy(product.getCreatedBy());
                }
                if (product.getLastModifiedBy() != null) {
                    existingProduct.setLastModifiedBy(product.getLastModifiedBy());
                }

                return existingProduct;
            })
            .map(productRepository::save);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<Product> findAll(Pageable pageable) {
        log.debug("Request to get all Products");
        return productRepository.findAll(pageable);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Product> findOne(Long id) {
        log.debug("Request to get Product : {}", id);
        return productRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Product : {}", id);
        productRepository.deleteById(id);
    }
}
