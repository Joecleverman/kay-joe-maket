const API_URL = 'http://localhost:3001/api'

const setProducts = products => {
  return {
    type: 'FETCH_PRODUCTS',
    products
  }
}

const setProduct = product => {
  return {
    type: 'FETCH_PRODUCT',
    product
  }
}

const addProduct = product => {
  return {
    type:'ADD_PRODUCT',
    product
  }
}

const addLikes = product => {
  return {
    type: 'LIKE_PRODUCT',
    product
  }
}

const removeProduct = product => {
  return {
    type: 'REMOVE_PRODUCT',
    product
  }
}

const setComments = comments => {
  return {
    type: 'FETCH_COMMENTS',
    comments
  }
}

const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export const fetchProducts = () => {
  return dispatch => {
    dispatch({type: 'LOADING_PRODUCTS'});
      return fetch(`${API_URL}/products`)
      .then(resp => resp.json())
      .then(products => dispatch(setProducts(products)))
      .catch(error => console.log(error))
  }
}

export const fetchProduct = (productId) => {
	return dispatch => {
		return fetch(`${API_URL}/products/${productId}`)
			.then(response => response.json())
			.then(product => {
				dispatch(setProduct([product]));
			})
      .catch(error => console.log(error))
	}
}

export const createProduct = (product) => {
  return dispatch => {
    return fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({product: product})
    })
    .then(response => response.json())
//    .then(handleErrors)
    .then(product => {
      dispatch(addProduct(product))
    })
    .catch(error => {
      dispatch({type: 'error'})
    })
  }
}

export const likeProduct = (product) => {
  const updatedProduct = Object.assign(...product, { likes: product.likes + 1 })
    return dispatch => {
      return fetch(`${API_URL}/products/${product.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({product: updatedProduct})
      })
      .then(response => response.json())
      .then(product => {
        dispatch(addLikes(product))
      })
      .catch(error => console.log(error))
  }
}

export const deleteProduct = (productId, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/products/${productId}`, {
      method: "DELETE",
    })
    .then(response => {
      dispatch(removeProduct(productId));
      routerHistory.replace('/products')
    })
    .catch(error => console.log(error))
  }
}

export const fetchComments = (productId) => {
  return dispatch => {
    dispatch({type: 'LOADING_COMMENTS'});
      return fetch(`${API_URL}/products/${productId}/comments`)
      .then(response => response.json())
      .then(comments => dispatch(setComments(comments)))
      .catch(error => console.log(error))
  }
}

export const createComment = (comment) => {
  return dispatch => {
    return fetch(`${API_URL}/products/${comment.product_id}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: comment})
    })
    .then(response => response.json())
    .then(comment => {
      dispatch(addComment(comment))
    })
    .catch(error => {
      dispatch({type: 'error'})
    })
  }
}
