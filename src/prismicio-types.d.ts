// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type IndexDocumentDataSlicesSlice = ProfileCardSlice;

/**
 * Content for index documents
 */
interface IndexDocumentData {
	/**
	 * broodtrommel field in *index*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: index.broodtrommel
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	broodtrommel: prismic.ContentRelationshipField<'broodtrommel'>;

	/**
	 * Slice Zone field in *index*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: index.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<IndexDocumentDataSlicesSlice>
	/**
	 * Meta Description field in *index*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: index.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *index*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: index.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;

	/**
	 * Meta Title field in *index*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: index.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_title: prismic.KeyTextField;
}

/**
 * index document from Prismic
 *
 * - **API ID**: `index`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IndexDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<IndexDocumentData>,
	'index',
	Lang
>;

export type AllDocumentTypes = IndexDocument;

/**
 * Primary content in *ProfileCard → Primary*
 */
export interface ProfileCardSliceDefaultPrimary {
	/**
	 * CardImage field in *ProfileCard → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile_card.primary.card_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	card_image: prismic.ImageField<never>;
}

/**
 * Primary content in *ProfileCard → Items*
 */
export interface ProfileCardSliceDefaultItem {
	/**
	 * InfoField field in *ProfileCard → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: profile_card.items[].infoline
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	infoline: prismic.KeyTextField;
}

/**
 * Default variation for ProfileCard Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProfileCardSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ProfileCardSliceDefaultPrimary>,
	Simplify<ProfileCardSliceDefaultItem>
>;

/**
 * Slice variation for *ProfileCard*
 */
type ProfileCardSliceVariation = ProfileCardSliceDefault;

/**
 * ProfileCard Shared Slice
 *
 * - **API ID**: `profile_card`
 * - **Description**: ProfileCard
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProfileCardSlice = prismic.SharedSlice<'profile_card', ProfileCardSliceVariation>;

/**
 * Default variation for Test Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSliceDefault = prismic.SharedSliceVariation<
	'default',
	Record<string, never>,
	never
>;

/**
 * Slice variation for *Test*
 */
type TestSliceVariation = TestSliceDefault;

/**
 * Test Shared Slice
 *
 * - **API ID**: `test`
 * - **Description**: Test
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestSlice = prismic.SharedSlice<'test', TestSliceVariation>;

/**
 * Primary content in *TextBlockMain → Primary*
 */
export interface TextBlockMainSliceDefaultPrimary {
	/**
	 * SingleTitle field in *TextBlockMain → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_block_main.primary.singletitle
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	singletitle: prismic.KeyTextField;
}

/**
 * Primary content in *TextBlockMain → Items*
 */
export interface TextBlockMainSliceDefaultItem {
	/**
	 * Title field in *TextBlockMain → Items*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: text_block_main.items[].title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;
}

/**
 * Default variation for TextBlockMain Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockMainSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<TextBlockMainSliceDefaultPrimary>,
	Simplify<TextBlockMainSliceDefaultItem>
>;

/**
 * Slice variation for *TextBlockMain*
 */
type TextBlockMainSliceVariation = TextBlockMainSliceDefault;

/**
 * TextBlockMain Shared Slice
 *
 * - **API ID**: `text_block_main`
 * - **Description**: TextBlockMain
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextBlockMainSlice = prismic.SharedSlice<
	'text_block_main',
	TextBlockMainSliceVariation
>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			IndexDocument,
			IndexDocumentData,
			IndexDocumentDataSlicesSlice,
			AllDocumentTypes,
			ProfileCardSlice,
			ProfileCardSliceDefaultPrimary,
			ProfileCardSliceDefaultItem,
			ProfileCardSliceVariation,
			ProfileCardSliceDefault,
			TestSlice,
			TestSliceVariation,
			TestSliceDefault,
			TextBlockMainSlice,
			TextBlockMainSliceDefaultPrimary,
			TextBlockMainSliceDefaultItem,
			TextBlockMainSliceVariation,
			TextBlockMainSliceDefault
		};
	}
}
