interface ProductParameter {
    params: {
        id: string;
    }
}

export default function Product({ params }: ProductParameter) {
    return (
      <h1>ID: {params.id} </h1>
    )
  }
  