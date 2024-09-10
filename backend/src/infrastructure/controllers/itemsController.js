class ItemsController {
    async fetchItemsList(req, res) {
        try {
            const data = [
                {
                    id: 1,
                    attributes: {
                        id: 1,
                        imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
                        imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
                        href: "",
                        name: "negra",
                        color: "",
                        price: "123",
                    },
                },
                {
                    id: 2,
                    attributes: {
                        id: 2,
                        imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
                        imageAlt: "Long rectangular black fabric bag with brass snap and strap loops.",
                        href: "",
                        name: "blanca",
                        color: "",
                        price: "123",
                    },
                },
                {
                    id: 3,
                    attributes: {
                        id: 3,
                        imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
                        imageAlt: "Chambray blue canvas cover with leather loop and snap closure.",
                        href: "",
                        name: "gris",
                        color: "",
                        price: "123",
                    },
                },
                {
                    id: 4,
                    attributes: {
                        id: 4,
                        imageSrc: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
                        imageAlt: "Olive drab canvas cover with leather loop and snap closure.",
                        href: "",
                        name: "roja com puntos",
                        color: "",
                        price: "123",
                    },
                },
            ];

            const meta = {
                pagination: {
                    current_page: 1,
                    from: null,
                    last_page: 1,
                    per_page: 10,
                    to: null,
                    total: 0,
                },
            };

            res.status(200).json({ data, meta });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching items list', error });
        }
    }
}

export default ItemsController;