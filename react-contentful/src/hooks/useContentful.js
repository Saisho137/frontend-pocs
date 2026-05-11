import { createClient } from "contentful";

const useContentful = () => {
    const client = createClient({
        space: "2gssinhyknyf",
        accessToken: "-_Y8pB5nFU9F5fr0rJp76xygj1OmNP5I7hTRQ8vOqd0",
        host: "preview.contentful.com"
    });

    const getProducts = async () => {
        try {
            const entries = await client.getEntries({
                content_type: "product",
                select: "fields"
            });

            const sanitizedEntries = entries.items.map((item) => {
                const avatar = item.fields.avatar.fields;
                return {
                    ...item.fields,
                    avatar
                };
            });

            return sanitizedEntries;
        } catch (error) {
            console.log(`Error fetching products -> ${error}`);
        }
    };

    return { getProducts };
};

export default useContentful;
