
/**
 * 
 * XMPConst object
 *	 
 * This object contains the read-only constant definitions for use with the JavaScript XMP API. Some of these are listed in the context in which they are used. Longer lists are provided here.	
 * Schema namespace string constants	
 *	 
 */
declare enum XMPConst {

	UNKNOWN,
	
	/** Data type: `string` */
	STRING,
	/** Data type: `integer` */
	INTEGER,
	/** Data type: `number` */
	NUMBER,
	/** Data type: `boolean` */
	BOOLEAN,
	/** Data type: `Date` */
	XMPDATE,

	/**
	 * Constant values for the namespace URI strings used in all get and set property operations. See XMPMeta object.
	 * The XML namespace for the Dublin Core schema, http://purl.org/dc/elements/1.1
	 */
	NS_DC,
	/** The XML namespace for the IPTC Core schema. */
	NS_IPTC_CORE,
	/** The XML namespace for RDF. */
	NS_RDF,
	/** The XML namespace for XML. */
	NS_XML,
	/** The XML namespace for the XMP basic schema. */
	NS_XMP,
	/** The XML namespace for the XMP copyright schema. */
	NS_XMP_RIGHTS,
	/** The XML namespace for the XMP digital asset management schema. */
	NS_XMP_MM,
	/** The XML namespace for the job management schema. */
	NS_XMP_BJ,
	/** The XML namespace for the XMP note schema. An Adobe private namespace; do not create new properties. */
	NS_XMP_NOTE,
	/** The XML namespace for the PDF schema. */
	NS_PDF,
	/** The XML namespace for the PDFX schema. An Adobe private namespace; do not create new properties. */
	NS_PDFX,
	/** The XML namespace for the Adobe Photoshop custom schema. */
	NS_PHOTOSHOP,
	/** The XML namespace for the Adobe Photoshop Album custom schema. */
	NS_PS_ALBUM,
	/** The XML namespace for Adobe’s EXIF schema. */
	NS_EXIF,
	/** The XML namespace for Adobe’s EXIF auxiliary schema. */
	NS_EXIF_AUX,
	/** The XML namespace for Adobe’s TIFF schema. */
	NS_TIFF,
	/** The XML namespace for the PNG schema. */
	NS_PNG,
	/** The XML namespace for the JPEG schema. */
	NS_JPEG,
	/** The XML namespace for the Flash small web format schema. */
	NS_SWF,
	/** The XML namespace for the JPK schema. */
	NS_JPK,
	/** The XML namespace for the Camera Raw schema. */
	NS_CAMERA_RAW,
	/** The XML namespace for the DM schema. */
	NS_DM,
	/** The XML namespace for the Adobe Stock Photos schema. */
	NS_ADOBE_STOCK_PHOTO,
	/** The XML namespace for the Microsoft advanced streaming format schema. */
	NS_ASF,
	/**
	 * Type namespace string constants	
	 * Constant values for the field-type namespace URI strings used in all structured property operations. See XMPMeta object.
	 */
	/**	The XML namespace for qualifiers of the xmp:Identifier property. */
	TYPE_IDENTIFIER_QUAL,
	/**	The XML namespace for fields of the Dimensions type. */
	TYPE_DIMENSIONS,
	/**	The XML namespace for the XMP text document schema. */
	TYPE_TEXT,
	/**	The XML namespace for the XMP paged document schema. */
	TYPE_PAGEDFILE,
	/**	The XML namespace for a structure containing the characteristics of a colorant (swatch) used in a document. */
	TYPE_GRAPHICS,
	/**	The XML namespace for fields of a graphical image. Used for the Thumbnail type. */
	TYPE_IMAGE,
	/**	The XML namespace for a structure containing the characteristics of a font used in a document. */
	TYPE_FONT,
	/**	The XML namespace for fields of the ResourceEvent type. */
	TYPE_RESOURCE_EVENT,
	/**	The XML namespace for fields of the ResourceRef type. */
	TYPE_RESOURCE_REF,
	/**	The XML namespace for fields of the Version type. */
	TYPE_ST_VERSION,
	/**	The XML namespace for fields of the JobRef type. */
	TYPE_ST_JOB,
	/**	The XML namespace for the elements of a manifest array. */
	TYPE_MANIFEST_ITEM,
	/**	 */
	TYPE_PDFA_SCHEMA,
	/**	 */
	TYPE_PDFA_PROPERTY,
	/**	 */
	TYPE_PDFA_TYPE,
	/**	 */
	TYPE_PDFA_FIELD,
	/**	 */
	TYPE_PDFA_ID,
	/**	The XML namespaces for PDF subtypes */
	TYPE_PDFA_EXTENSION,
	/**
	 * File format numeric constants
	 * Constant values for supported file types, used in I/O operations. See XMPFile object.
	 */
	/** Unknown file-format. */
	FILE_UNKNOWN,
	/** PDF */
	FILE_PDF,
	/** PS, general PostScript following DSC conventions */
	FILE_POSTSCRIPT,
	/** EPS, encapsulated PostScript */
	FILE_EPS,
	/** JPEG */
	FILE_JPEG,
	/** JPX, JPEG 2000 file */
	FILE_JPEG2K,
	/** TIFF */
	FILE_TIFF,
	/** GIF */
	FILE_GIF,
	/** PNG */
	FILE_PNG,
	/** SWF, Flash file */
	FILE_SWF,
	/** FLA, Flash authoring file */
	FILE_FLA,
	/** FLV, Flash video file */
	FILE_FLV,
	/** MOV, Quicktime */
	FILE_MOV,
	/** AVI */
	FILE_AVI,
	/** CIN, Cineon */
	FILE_CIN,
	/** WAV */
	FILE_WAV,
	/** MP3 */
	FILE_MP3,
	/** SES, Audition session */
	FILE_SES,
	/** CEL, Audition loop */
	FILE_CEL,
	/** MPEG */
	FILE_MPEG,
	/** MP2 */
	FILE_MPEG2,
	/** MP4 */
	FILE_MPEG4,
	/** WMAV, Windows Media Audio and Video */
	FILE_WMAV,
	/** AIFF */
	FILE_AIFF,
	/** HTML */
	FILE_HTML,
	/** XML */
	FILE_XML,
	/** TEXT */
	FILE_TEXT,
	/** PSD, Photoshop */
	FILE_PHOTOSHOP,
	/** AI, Illustrator */
	FILE_ILLUSTRATOR,
	/** INDD, Indesign */
	FILE_INDESIGN,
	/** AE, After Effects */
	FILE_AE_PROJECT,
	/** AET, After Effects Project Template */
	FILE_AE_PROJECT_TEMPLATE,
	/** FFX, After Effects Filter Preset file */
	FILE_AE_FILTER_PRESET,
	/** NCOR, Encore DVD project file */
	FILE_ENCORE_PROJECT,
	/** PRPJ, Premiere Project file */
	FILE_PREMIERE_PROJECT,
	/** PRTL, Premiere Title file */
	FILE_PREMIERE_TITLE,

	/** A direct mapping. It can be simple-to-simple, array-to-array, or structure-to-structure. */
	ALIAS_TO_SIMPLE_PROP,
	/** The actual property is an unordered array; the alias is to the first element. */
	ALIAS_TO_ARRAY,
	/** The actual property is an ordered array; the alias is to the first element. */
	ALIAS_TO_ORDERED_ARRAY,
	/** The actual property is an alternate array; the alias is to the first element. */
	ALIAS_TO_ALT_ARRAY,
	/** The actual property is an alternate text array; the alias is to the x-default element. */
	ALIAS_TO_ALT_TEXT,

	/** Open for read-only access. */
	OPEN_FOR_READ,
	/** Open for reading and writing. */
	OPEN_FOR_UPDATE,
	/** Only the XMP is wanted, allows space/time optimizations. */
	OPEN_ONLY_XMP,
	/** Be strict about locating XMP and reconciling with other forms. */
	OPEN_STRICTLY,
	/** Require the use of a smart handler. No packet scanning is performed. */
	OPEN_USE_SMART_HANDLER,
	/** Force packet scanning, do not use a smart handler. */
	OPEN_USE_PACKET_SCANNING,
	/** Only packet-scan files known to need scanning. */
	OPEN_LIMITED_SCANNING,

	/** Can inject first-time XMP into an existing file. */
	HANDLER_CAN_INJECT_XMP,
	/** Can expand XMP or other metadata in an existing file. */
	HANDLER_CAN_EXPAND,
	/** Can copy one file to another, writing new metadata. */
	HANDLER_CAN_REWRITE,
	/** Can expand, but prefers in-place update. */
	HANDLER_PPEFERS_IN_PLACE,
	/** Supports reconciliation between XMP and other forms. */
	HANDLER_CAN_RECONCILE,
	/** Allows access to just the XMP, ignoring other forms. */
	HANDLER_ALLOWS_ONLY_XMP,
	/** File handler returns raw XMP packet information. */
	HANDLER_RETURNS_RAW_PACKETS,
	/** File handler returns native thumbnail. */
	HANDLER_RETURNS_TNAIL,
	/** File handler does the file open and close. */
	HANDLER_OWNS_FILE,
	/** File handler allows crash-safe file updates. */
	HANDLER_ALLOWS_SAFE_UPDATE,
	/** File format needs XMP packet to be read-only. */
	HANDLER_NEEDS_READONLY_PACKET,
	/** Fle handler uses a sidecar file for the XMP. */
	HANDLER_USES_SIDECAR_XMP,

	/** Write into a temporary file then swap for crash safety. */
	CLOSE_UPDATE_SAFELY,

	/** The item is an array (of type alt, bag, or seq). */
	PROP_IS_ARRAY,
	/** The item is a structure with nested fields. */
	PROP_IS_STRUCT,

	/** Item order is significant. Implies `XMPConst.PROP_IS_ARRAY` */
	ARRAY_IS_ORDERED,
	/** Items are mutually exclusive alternates. Implies `XMPConst.PROP_IS_ARRAY` and `XMPConst.ARRAY_IS_ORDERED`. */
	ARRAY_IS_ALTERNATIVE,
	/** References the last existing item in the array */
	ARRAY_LAST_ITEM,

	/** Limit iteration to immediate children of the root property. By default, iterates into subtrees. */
	ITERATOR_JUST_CHILDREN,
	/** Limit iteration to leaf nodes. By default, iterates into all nodes of a subtree. */
	ITERATOR_JUST_LEAFNODES,
	/** Return only the leaf part of the path. By default, returns a full path. */
	ITERATOR_JUST_LEAFNAMES,
	/** Include aliases. By default, considers only actual properties. */
	ITERATOR_INCLUDE_ALIASES,
	/** Omit qualifiers from iteration. */
	ITERATOR_OMIT_QUALIFIERS,

	/** Do not include an XML packet wrapper. */
	SERIALIZE_OMIT_PACKET_WRAPPER,
	/** Create a read-only XML packet wrapper. */
	SERIALIZE_READ_ONLY_PACKET,
	/** Use a highly compact RDF syntax and layout. */
	SERIALIZE_USE_COMPACT_FORMAT,
	/** Serialize a plain XMP (not currently supported). */
	SERIALIZE_USE_PLAIN_XMP,
	/** Include typical space for a JPEG thumbnail in the padding if no xmp:Thumbnail property is present. */
	SERIALIZE_INCLUDE_THUMBNAIL_PAD,
	/** Compute padding to meet the overall packet length provided by the padding parameter. Throws an exception if the unpadded packet exceeds this length. */
	SERIALIZE_EXACT_PACKET_LENGTH,
	/** Include XML comments for aliases. */
	SERIALIZE_WRITE_ALIAS_COMMENTS,
	
	/** Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties. */
	APPEND_ALL_PROPERTIES,
	/** Replace the values of existing properties with the value from the source object. By default, existing values are retained. This applies to properties at all levels of hierarchy. */	
	APPEND_REPLACE_OLD_VALUES,
	/** Delete properties if the new value is empty. */
	APPEND_DELETE_EMPTY_VALUES,

	/** Allow commas in item values (such as “LastName, FirstName”). This option must be set the same way in this function and in separateArrayItems() to reconstruct the items correctly. */
	SEPARATE_ALLOW_COMMAS,

	/** Remove internal and external properties. By default, removes only external properties. Applies only to top-level properties. */
	REMOVE_ALL_PROPERTIES,
	/** Remove aliases defined in the namespace. If the property name is supplied, removes it regardless of this option. */
	REMOVE_INCLUDE_ALIASES,

}

declare type XMPNamespaceAliasConstants = XMPConst.NS_DC | XMPConst.NS_IPTC_CORE | XMPConst.NS_RDF | XMPConst.NS_XML | XMPConst.NS_XMP | XMPConst.NS_XMP_RIGHTS | XMPConst.NS_XMP_MM |
	XMPConst.NS_XMP_BJ | XMPConst.NS_XMP_NOTE | XMPConst.NS_PDF | XMPConst.NS_PDFX | XMPConst.NS_PHOTOSHOP | XMPConst.NS_PS_ALBUM | XMPConst.NS_EXIF | XMPConst.NS_EXIF_AUX |
	XMPConst.NS_TIFF | XMPConst.NS_PNG | XMPConst.NS_JPEG | XMPConst.NS_SWF | XMPConst.NS_JPK | XMPConst.NS_CAMERA_RAW | XMPConst.NS_DM | XMPConst.NS_ADOBE_STOCK_PHOTO | XMPConst.NS_ASF | string

declare type XMPFileFormatConstants = XMPConst.FILE_UNKNOWN | XMPConst.FILE_PDF | XMPConst.FILE_POSTSCRIPT | XMPConst.FILE_EPS | XMPConst.FILE_JPEG | XMPConst.FILE_JPEG2K |
	XMPConst.FILE_TIFF | XMPConst.FILE_GIF | XMPConst.FILE_PNG | XMPConst.FILE_SWF | XMPConst.FILE_FLA | XMPConst.FILE_FLV | XMPConst.FILE_MOV |
	XMPConst.FILE_AVI | XMPConst.FILE_CIN | XMPConst.FILE_WAV | XMPConst.FILE_MP3 | XMPConst.FILE_SES | XMPConst.FILE_CEL | XMPConst.FILE_MPEG |
	XMPConst.FILE_MPEG2 | XMPConst.FILE_MPEG4 | XMPConst.FILE_WMAV | XMPConst.FILE_AIFF | XMPConst.FILE_HTML | XMPConst.FILE_XML | XMPConst.FILE_TEXT |
	XMPConst.FILE_PHOTOSHOP | XMPConst.FILE_ILLUSTRATOR | XMPConst.FILE_INDESIGN | XMPConst.FILE_AE_PROJECT | XMPConst.FILE_AE_PROJECT_TEMPLATE | XMPConst.FILE_AE_FILTER_PRESET |
	XMPConst.FILE_ENCORE_PROJECT | XMPConst.FILE_PREMIERE_PROJECT | XMPConst.FILE_PREMIERE_TITLE

declare type XMPHandlerConstants = XMPConst.HANDLER_CAN_INJECT_XMP | XMPConst.HANDLER_CAN_EXPAND | XMPConst.HANDLER_CAN_REWRITE | XMPConst.HANDLER_PPEFERS_IN_PLACE |
	XMPConst.HANDLER_CAN_RECONCILE | XMPConst.HANDLER_ALLOWS_ONLY_XMP | XMPConst.HANDLER_RETURNS_RAW_PACKETS | XMPConst.HANDLER_RETURNS_TNAIL | 
	XMPConst.HANDLER_OWNS_FILE | XMPConst.HANDLER_ALLOWS_SAFE_UPDATE | XMPConst.HANDLER_NEEDS_READONLY_PACKET | XMPConst.HANDLER_USES_SIDECAR_XMP

declare type XMPFileOpenConstants = XMPConst.OPEN_FOR_READ |	XMPConst.OPEN_FOR_UPDATE | XMPConst.OPEN_ONLY_XMP |	XMPConst.OPEN_STRICTLY | XMPConst.OPEN_USE_SMART_HANDLER |
	XMPConst.OPEN_USE_PACKET_SCANNING |	XMPConst.OPEN_LIMITED_SCANNING

declare type XMPPropIsConstants = XMPConst.PROP_IS_ARRAY | XMPConst.PROP_IS_STRUCT

declare type XMPSerializeConstants = XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER | XMPConst.SERIALIZE_READ_ONLY_PACKET | XMPConst.SERIALIZE_USE_COMPACT_FORMAT | XMPConst.SERIALIZE_USE_PLAIN_XMP |
	XMPConst.SERIALIZE_INCLUDE_THUMBNAIL_PAD | XMPConst.SERIALIZE_EXACT_PACKET_LENGTH | XMPConst.SERIALIZE_WRITE_ALIAS_COMMENTS

declare type XMPIteratorConstants =	XMPConst.ITERATOR_JUST_CHILDREN |	XMPConst.ITERATOR_JUST_LEAFNODES |	XMPConst.ITERATOR_JUST_LEAFNAMES |
	XMPConst.ITERATOR_INCLUDE_ALIASES |	XMPConst.ITERATOR_OMIT_QUALIFIERS

/**
 * This object is returned by XMPMeta.:ref:xmpmeta-resolveAlias. The read-only properties describe an XMP metadata alias.
 */
declare type XMPAliasInfo = {
	/**
	 * A constant that describes the property type of the resolved alias, 0 for a simple property.
	 */
	arrayForm: XMPConst.ALIAS_TO_SIMPLE_PROP | XMPConst.ALIAS_TO_ARRAY | XMPConst.ALIAS_TO_ORDERED_ARRAY | XMPConst.ALIAS_TO_ALT_ARRAY | XMPConst.ALIAS_TO_ALT_TEXT;
	/** The name of the property to which the alias resolves. */
	name: string;
	/** The namespace of the property to which the alias resolves. See Schema namespace string constants. */
	namespace: string;
}

/**
 * This class represents a date and time. Times include a time zone, and can have up to nanosecond resolution.
 * ```js
 *     //XMPDateTime object constructors
 *     new XMPDateTime ( ); // creates an object containing a 0 date
 *     new XMPDateTime ( date ); // initializes the object with a JavaScript date
 *     new XMPDateTime ( iso8601Date ); // initializes the object with an ISO date
 * ```
 * ---
 * | | |
 * |-|-|
 * | *date* | A JavaScript Date object. The time zone is set to the local operation-system time-zone value. Times in the XMP Toolkit can have up to nanosecond resolution; however, when converting to or from a JavaScript Date value, time resolution is reduced to milliseconds. |
 * | *iso8601Date* | A string containing a date-time in ISO 8601 format; for example: `"2007-04-10T17:54:50+01:00"` |
 */
declare class XMPDateTime {
	/** All properties are read-write, and allow you to modify the date-time value. If values are set outside the allowed range, they are automatically set to the minimum or maximum allowed value. */
	/** The year, in the range [0000…9999]. */
	year: number
	/** The month, in the range [1…12]. */
	month: number
	/** The day, in the range [1…31]. */
	day: number
	/** The hour, in the range [1…23]. */
	hour: number
	/** The minute, in the range [1…59]. */
	minute: number
	/** The second, in the range [1…59. */
	second: number
	/** The nanosecond, in the range [0…1e+9 -1]. */
	nanosecond: number
	/** The time zone direction of offset. - 0: UTC - -1: west - 1: east */
	tzSign: number
	/** The time zone hour offset from the prime meridian, in the range [1…23]. */
	tzHour: number
	/** The time zone minute offset from the prime meridian, in the range [1…59]. */
	tzMinute: number

	/** 
	 * Reports the time order of two date-time values.
	 * Returns 0 if the two values are the same, 1 if this date-time is later than the comparison value, -1 if this date-time is earlier than the comparison value.
	 */
	compareTo (xmpDateTime: XMPDateTimeObj): -1 | 0 | 1
	/**
	 * Sets the time zone in this object to the local operating-system time zone, adjusting the time values from the previous time zone, if necessary.
	 */
	convertToLocalTime (): void
	/**
	 * Sets the time zone in this object to UTC (coordinated universal time), adjusting the time values from the previous time zone, if necessary.
	 */
	convertToUTCTime (): void
	/**
	 * Converts this date-time value to a JavaScript Date. The time zone is normalized (time zones are not supported in the JavaScript format), and the accuracy is reduced to milliseconds.
	 */
	getDate (): Date
	/**
	 * Sets the time zone in this object to the current operation-system value, replacing any existing value. Does not affect other fields.
	 */
	setLocalTimeZone (): void	
}

/**
 * This class corresponds to the Adobe XMP Toolkit’s File Handler component, which provides convenient I/O access to the main, or document level, XMP for a file.
 * The File Handler supports those file formats in which you can embed XMP metadata, as defined in the XMP Specification.
 * 
 * It allows you to add XMP where none currently exists, expand existing XMP without regard to existing padding, and reconcile XMP with other metadata formats.
 * The XMP Toolkit also supplies the Packet Scanner as a fallback solution for unsupported file formats.
 * 
 * It provides more limited accesses to all file formats by performing a dump file scan.
 * It can update a file, but cannot extend the packet or reconcile other metadata formats.
 * The XMPScript API does not currently support retrieving thumbnails.
 * > **Note**: You can also use the Adobe Bridge Metadata object to access embedded metadata in files.
 * It supports thumbnails and previews, and additional file formats such as PDF and Camera Raw.
 * For details, see the Adobe Bridge JavaScript Guide and Adobe Bridge JavaScript Reference.
 * ```js
 *     new XMPFile( filePath, format, openFlags)
 * ```
 */
declare class XMPFile {
	constructor (
		/** A string containing the file path of a document. */
		filePath: string,
		/** The file format constant. See File format numeric constants. */
		format: XMPFileFormatConstants
		,
		/**
		 * The open options for the file. One of the 'open file' constants.
		 */
		openFlags: XMPFileOpenConstants
	)

	/**
	 * This property is available as a static property of the XMPFile class. It is not necessary to create an instance to access it.
	 * The descriptive string for this version of the XMP Toolkit.
	 */
	version: string

	/**
	 * This function is available as a static method of the XMPFile class. It is not necessary to create an instance to call it.
	 * Reports the supported features for the given file format.
	 * 
	 * Returns a logical OR of bit-flag constants, or 0 if the format is not handled
	 * @param format The file format constant. See File format numeric constants.
	 */
	static getFormatInfo (format: XMPFileFormatConstants): XMPHandlerConstants

	/**
	 * Reports whether XMP metadata of a given size can be updated for this file. This is particularly important if the packet size is increased.
	 * Considers only the length of the serialized packet; does not keep the provided XMP. Use putXMP() to actually update the XMP in the open file.
	 * Returns true if the given XMP can be put into this file.
	 * @param input • The XMP metadata as an XMPMeta object. • The XMP metadata as a string containing an XMP packet. • The XMP metadata as an Array of Number containing raw XMP packet data.
	 */
	canPutXMP (input: XMPMeta | XMPPacketInfo | number[]): boolean

	/**
	 * Closes this open file, after writing to it as necessary; that is, if the file was opened for update, and if the XMP metadata was updated or injected.
	 * The options provided when the file was opened determine whether this function reconciles the XMP with other forms of metadata;
	 * that is, whether any legacy metadata is also updated to be consistent with the XMP metadata.
	 * @param closeFlags A close-option constant, or 0.
	 */
	closeFile (closeFlags?: 0 | XMPConst.CLOSE_UPDATE_SAFELY): void

	/**
	 * Retrieves and parses the existing XMP metadata from this file.
	 * If the file format contains legacy metadata in a format that is recognized by the File Handler, the function creates an XMP packet containing the metadata.
	 * Returns an XMPMeta object, or null if the files does not contain XMP or convertible legacy metadata.
	 */
	getXMP (): XMPMeta | null

	/**
	 * Retrieves the raw XMP packet from this file, along with information about the packet.
	 * The options with which the file was opened determine whether this function reconciles other forms of metadata with the XMP.
	 * Returns an XMPPacketInfo object, or null if the files does not contain XMP metadata.
	 */
	getPacketInfo (): XMPPacketInfo | null

	/**
	 * Retrieves basic information about this file. Returns an XMPFileInfo object.
	 */
	getFileInfo (): XMPFileInfo

	/**
	 * Supplies new XMP metadata for this file. The file is not actually written until closeFile() is called.
	 * The options provided when the file was opened determine whether that function reconciles the XMP with other forms of metadata;
	 * that is, whether any legacy metadata is also updated to be consistent with the XMP metadata.
	 * @param input • The XMP metadata as an XMPMeta object. • The XMP metadata as a string containing an XMP packet. • The XMP metadata as an Array of Number containing raw XMP packet data.
	 */
	putXMP (input: XMPMeta | XMPPacketInfo | number[]): void
}

/**
 * This object is returned by XMPFile.:ref:xmpfile-getFileInfo. The read-only properties describe the file represented by the XMPFile object.
 * > **Note**: This object is not related to the XMP File Info dialog that Adobe Creative Suite 4 applications use to display metadata.
 */
declare class XMPFileInfo {
	/** The absolute path of the file, in JavaScript notation. */
	filePath: string
	format: XMPFileFormatConstants
	/** The features that are supported for this format. A logical OR of these bit-flag constants */
	handlerFlags: XMPHandlerConstants
	/** The options with which this file was opened. */
	openFlags: XMPFileOpenConstants
}

/**
 * Created by a call to `XMPMeta.:ref:xmpmeta-iterator`.
 * Walks recursively through the properties and qualifiers of an `XMPMeta` object, and returns them as `XMPProperty` object.
 * 
 * The object has no JavaScript properties.
 */
declare class XMPIterator {
	/**
	 * Retrieves the next item in the metadata.
	 * Returns an XMPProperty object, or null if there are no more items.
	 */
	next (): XMPProperty | null

	/**
	 * Skips the subtree below and the siblings of the current node on the subsequent call to `next()`.
	 */
	skipSiblings (): void

	/**
	 * Skips the subtree below the current node on the subsequent call to `next()`.
	 */
	skipSubtree (): void
}

/**
 * This class provides the core services of the XMP Toolkit.
 * The functions provide the ability to create and query metadata properties from an XMP namespace.
 * The class also provides static functions that allow you to create and query namespaces and aliases.
 * 
 * There is one static property on the class that provides XMP version information; there are no JavaScript properties in the instance.
 * The object encapsulates a set of metadata properties, which you access through the object functions.
 * 
 * The generic functions `getProperty()`, `setProperty()`, and `deleteProperty()` allow you to manipulate all types of properties, when used with appropriately composed path expressions.
 * For convenience, the object also provides more specific functions for use with specific types of properties, such as arrays.
 */
declare class XMPMeta {
	/**
	 * To create an XMPMeta object, use the new operator.
	 * The constructor accepts an RDF/XML serialized metadata packet as a string, or as an array of numbers that contain only byte values.
	 * It returns the new object. If no argument is supplied, the new object is empty; you can use the object’s functions to add namespaces and properties.
	 * 
	 * The first call to any of these constructors initializes the library by registering the standard namespaces and aliases:
	 * ```js
	 *     new XMPMeta ( ); // creates an empty object
	 *     new XMPMeta ( packet );
	 *     new XMPMeta ( buffer );
	 * ```
	 * | | |
	 * |-|-|
	 * | *packet* | A String containing an XML file or an XMP packet. |
	 * | *buffer* | An Array of Number. The UTF-8 or UTF-16 encoded bytes of an XML file or an XMP packet. This array is the result of `XMPMeta.:ref:xmpmeta-serializeToArray`. |
	 */
	constructor (input?: number[] | XMPPacketInfo | string)

	/** The descriptive string for this version of the XMP Toolkit. The `XMPMeta` class provides this static property. It is not necessary to create an instance to access it.*/
	static version: string;

	/**
	 * Deletes the specified alias; does not delete the aliased property. If the alias does not exist, does nothing.
	 * > Note: Not yet implemented in the XMP Toolkit.
	 */
	static deleteAlias (
		/** The namespace URI string. See Schema namespace string constants. */
		aliasNS: XMPNamespaceAliasConstants,
		aliasProp: string,
	): void
	
	/**
	 * Deletes a registered prefix - namespace URI pair.
	 * > Note: Not yet implemented in the XMP Toolkit.
	 * @param namespaceURI The namespace URI string. See Schema namespace string constants.
	 */
	static deleteNamespace (namespaceURI: XMPNamespaceAliasConstants): void

	/**
	 * Creates and returns a human-readable string containing the list of registered aliases and their targets.
	 */
	static dumpAliases (): string

	/**
	 * Creates and returns a human-readable string containing the list of registered namespace URIs and their associated prefixes.
	 */
	static dumpNamespaces (): string

	/**
	 * Retrieves the prefix associated with a registered namespace URI.
	 * Returns the prefix string followed by a colon.
	 * @param namespaceURI The namespace URI string. See Schema namespace string constants.
	 */
	static getNamespacePrefix (namespaceURI: XMPNamespaceAliasConstants): string

	/**
	 * Retrieves the registered namespace URI associated with a namespace prefix. Returns the URI String.
	 */
	static getNamespaceURI (namespacePrefix: string): string

	/**
	 * Defines an alias mapping from one namespace and property to another.
	 * An alias can be a direct mapping where the alias and actual property have the same data type, or it can map a simple alias to an item in an array,
	 * either the first item, or the x-default item in an alternate-text array.
	 * Multiple alias names can map to the same actual property, as long as the forms match.
	 * If the same alias and form exists, the call does nothing.
	 */
	static registerAlias (
		/** The alias namespace string. See Schema namespace string constants. */
		aliasNS: XMPNamespaceAliasConstants,
		/** he alias property, a simple name string. */
		aliasProp: string,
		/** The namespace string of the aliased property. See Schema namespace string constants. */
		actualNS: XMPNamespaceAliasConstants,
		/** The aliased property, a simple name string. */
		actualProp: string,
		/** Number. The array form for a simple alias to an array item, which controls how the array is created if it is set for the first time through the alias. */
		arrayForm: XMPAliasInfo["arrayForm"],
	)

	/** Registers a namespace with a prefix.
	 * If the suggested prefix is already in use, generates, registers, and returns a different prefix.
	 * Returns a String containing the actual registered prefix.
	 * This is the `suggestedPrefix`, unless that one is already assigned to another namespace.
	 */
	static registerNamespace (
		/** The alias namespace string. See Schema namespace string constants. */
		namespaceURI: XMPNamespaceAliasConstants,
		/** The suggested namespace prefix string. */
		suggestedPrefix: string,
	): string

	/**
	 * Retrieves information about the actual property to which an alias is mapped.
	 * Returns an XMPAliasInfo object.
	 */
	static resolveAlias (
		/** The alias namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The alias property string. */
		aliasProp: string,
	): XMPAliasInfo

	/** Appends an item to an existing array, or creates a new array-type property if the named array does not exist. */
	appendArrayItem (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array-type property name string. Can be a general path expression. */
		arrayName: string,
		/** The new item value string. Pass null for array items that do not have values. */
		itemValue?: string | null,
		/**
		 * Optional. A flag that describes the new item, if it is being created. One of:
		 * - `0`: The default. A simple item, or the type implied by the arrayOptions value
		 * - `XMPConst.PROP_IS_ARRAY`
		 * - `XMPConst.PROP_IS_STRUCT`
		 */
		itemOptions?: 0 | XMPPropIsConstants,
		/** Optional. A flag that describes the array form. Must be provided if the array is being created; ignored if the array already exists. One of:
		 * `XMPConst.ARRAY_IS_ORDERED` - Item order is significant. Implies `XMPConst.PROP_IS_ARRAY`.
		 * `XMPConst.ARRAY_IS_ALTERNATIVE` - Items are mutually exclusive alternates. Implies `XMPConst.PROP_IS_ARRAY` and `XMPConst.ARRAY_IS_ORDERED`. */
		arrayOptions?: XMPConst.ARRAY_IS_ORDERED | XMPConst.ARRAY_IS_ALTERNATIVE,
	): void

	/** Reports the number of items in an array-type metadata property. Returns the number of items. */
	countArrayItems (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array-type property name string. Can be a general path expression. */
		arrayName: string,
	): number
		
	/** Deletes the metadata tree that has the given array item as its root. */
	deleteArrayItem(
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array-type property name string. Can be a general path expression. */
		arrayName: string,
		/** Number. The 1-based position index of the item. Use `XMPConst.ARRAY_LAST_ITEM` to reference the last existing item in the array. */
		itemIndex: number,
	): void

	/** Deletes the metadata tree that has the given property as its root. If the property does not exist, does nothing. */
	deleteProperty (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The property name string. Can be a general path expression. */
		propName: string,
	): void
		
	/** Deletes the metadata tree that has the given structure field as its root. */
	deleteStructField (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The structure name string. Can be a general path expression. */
		structName: string,
		/** The field type namespace string. See Schema namespace string constants. */
		fieldNS: XMPNamespaceAliasConstants,
		/** The field name string. Must be a simple XML name. */
		fieldName: string,
	): void

	/** Deletes the metadata tree that has the given qualifier as its root. If the qualifier does not exist, does nothing. */
	deleteQualifier (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The structure name string. Can be a general path expression. */
		structName: string,
		/** The URI string of the qualifier namespace. */
		qualNS: string,
		/** The qualifier name string. Must be a simple XML name. */
		qualName: string,
	): void

	/**
	 * Reports whether an array item with a given index currently exists in an existing array in the metadata.
	 * Returns `true` if the array and item exist.
	 */
	doesArrayItemExist (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array-type property name string. Can be a general path expression. */
		arrayName: string,
		/** Number. The 1-based position index of the item. */
		itemIndex: number
	): boolean

	/**
	 * Reports whether a property with a given name currently exists in the metadata.
	 * Returns `true` if the property exists.
	 */
	doesPropertyExist (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The property name string. Can be a general path expression. */
		propName: string,
	): boolean

	/**
	 * Reports whether a structure field with a given name currently exists in the metadata.
	 * Returns `true` if the structure and field exist.
	 */
	doesStructFieldExist (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The structure name string. Can be a general path expression. */
		structName: string,
		/** The field type namespace string. See Schema namespace string constants. */
		fieldNS: XMPNamespaceAliasConstants,
		/** The field name string. Must be a simple XML name. */
		fieldName: string,
	): boolean

	/**
	 * Reports whether a qualifier with a given name currently exists for a given property.
	 * Returns `true` if the property and qualifier exist.
	 */
	doesQualifierExist (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The structure name string. Can be a general path expression. */
		structName: string,
		/** The URI string of the qualifier namespace. */
		qualNS: string,
		/** The qualifier name string. Must be a simple XML name. */
		qualName: string,
	): boolean

	/** Creates and returns a `string` containing the metadata content of this object as RDF. */
	dumpObject (): string

	/**
	 * Retrieves an item from an array-type metadata property.
	 * Returns an `XMPProperty` object, or `undefined` if the property is not found.
	 */
	getArrayItem (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array name string. Can be a general path expression. */
		arrayName: string,
		/** Number. The 1-based position index of the item. Use `XMPConst.ARRAY_LAST_ITEM` to reference the last existing item in the array. */
		itemIndex: number,
	): XMPProperty | undefined

	/**
	 * Retrieves the text value for a specific language from an alternate-text array.
	 * First tries to match the specific language. If not found, tries to match the generic language, if specified.
	 * If not found, gets the x-default item, if any. Otherwise, gets the first item.
	 * 
	 * Returns a `string`, or `undefined` if no matching value is not found.
	 */
	getLocalizedText (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The alternate-text array name string. Can be a general path expression. */
		altTextName: string,
		/** The name of the generic language as an RFC 3066 primary subtag. Can be null or the empty string. */
		genericLang: string,
		/** The name of the specific language as an RFC 3066 primary subtag; for example, en-US. Must be specified. */
		specificLang: string,
	): string | undefined

	/**
	 * Retrieves the value and options of a metadata property. Use for top-level, simple properties, or after using the path-composition functions in the XMPUtils object.
	 * Returns an `XMPProperty` object, or `undefined` if the property is not found.
	 */
	getProperty (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The property name string. Can be a general path expression. */
		propName: string,
		/**
		 * Optional, string. The property data type, one of:
		 * - `XMPConst.STRING`
		 * - `XMPConst.INTEGER`
		 * - `XMPConst.NUMBER`
		 * - `XMPConst.BOOLEAN`
		 * - `XMPConst.XMPDATE`
		*/
		valueType?: XMPConst.STRING | XMPConst.INTEGER | XMPConst.NUMBER | XMPConst.BOOLEAN | XMPConst.XMPDATE,
	): XMPProperty | undefined

	/**
	 * Retrieves a field value from within a nested structure in metadata.
	 * Returns an `XMPProperty` object, or `undefined` if the property is not found.
	 */
	getStructField (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The structure name string. Can be a general path expression. */
		structName: string,
		/** The field type namespace string. See Schema namespace string constants. */
		fieldNS: XMPNamespaceAliasConstants,
		/** The field name string. Must be a simple XML name. */
		fieldName: string,
	): XMPProperty | undefined

	/**
	 * Retrieves a qualifier attached to a metadata property.
	 * Returns an `XMPProperty` object, or `undefined` if the property is not found.
	 */
	getQualifier (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The structure name string. Can be a general path expression. */
		structName: string,
		/** The URI string of the qualifier namespace. */
		qualNS: string,	
		/** The qualifier name string. Must be a simple XML name. */
		qualName: string,
	): XMPProperty | undefined

	/**
	 * Inserts an item into an array, before an existing item. The index positions of all later items are incremented. The array must exist.
	 */
	insertArrayItem (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array-type property name string. Can be a general path expression. */
		arrayName: string,
		/** Number. The 1-based position index at which to insert the new item. Use `XMPConst.ARRAY_LAST_ITEM` to reference the last existing item in the array. */
		itemIndex: number | XMPConst.ARRAY_LAST_ITEM,
		/** String. The new item value. Pass `null` for array items that do not have values. */
		itemValue: string | null,
		/**
		 * Optional. A flag that describes the new item, if it is being created. One of:
		 * - `0`: A simple item, the default.
		 * - `XMPConst.PROP_IS_ARRAY`: The item is an array (of type alt, bag, or seq).
		 * - `XMPConst.PROP_IS_STRUCT`: The item is a structure with nested fields.
		 */
		itemOptions?: 0 | XMPConst.PROP_IS_ARRAY | XMPConst.PROP_IS_STRUCT,
	): void

	/**
	 * Creates an iteration object that can iterate over the properties, arrays, and qualifiers within this metadata.
	 * Specify options, a namespace, and a property to limit the range and granularity of the resulting items.
	 * Returns an XMPIterator object for this metadata object.
	 */
	iterator (
		/** The set of options that control how the iteration is performed, and how values are returned. A logical OR of these bit-flag constants. */
		options: XMPIteratorConstants,
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array-type property name string. Can be a general path expression. */
		propName: string,
	): XMPIterator

	/** Serializes this XMP metadata into a string as RDF. Returns a String. */
	serialize (
		/**
		 * Optional. The set of options that control how the serialization is performed.
		 * The options must be logically consistent; if they conflict, the function throws an exception. A logical OR of these bit-flag constants.
		 */
		options?: XMPSerializeConstants,
		/**
		 * Optional, Number. If the options value is `SERIALIZE_EXACT_PACKET_LENGTH`, this the exact length of the packet, including padding characters that are added to meet this length.
		 * If the options value is not `SERIALIZE_EXACT_PACKET_LENGTH`, this is a number of padding characters to add. Default is `0`, meaning to use the appropriate amount of padding.
		 */
		padding?: number,
		/** Optional, String. The string to use as an indent. Default is two spaces. */
		indent?: string,
		/** Optional, String. The newline character to use. Default is `U+000A`. */
		newline?: string,
		/** Optional, Number. The level of indentation of the outermost XML element. Default is `0`. */
		baseIndent?: number,
	): string

	/**
	 * Serializes this XMP metadata into a string as RDF, then converts that to an array of one-byte numeric values, the UTF-8 or UTF-16 encoded characters.
	 * Returns an Array of Numbers.
	 */
	serializeToArray (
		/**
		 * Optional. The set of options that control how the serialization is performed.
		 * The options must be logically consistent; if they conflict, the function throws an exception. A logical OR of these bit-flag constants.
		 */
		options?: XMPSerializeConstants,
		/**
		 * Optional, Number. If the options value is `SERIALIZE_EXACT_PACKET_LENGTH`, this the exact length of the packet, including padding characters that are added to meet this length.
		 * If the options value is not `SERIALIZE_EXACT_PACKET_LENGTH`, this is a number of padding characters to add. Default is `0`, meaning to use the appropriate amount of padding.
		 */
		padding?: number,
		/** Optional, String. The string to use as an indent. Default is two spaces. */
		indent?: string,
		/** Optional, String. The newline character to use. Default is `U+000A`. */
		newline?: string,
		/** Optional, Number. The level of indentation of the outermost XML element. Default is `0`. */
		baseIndent?: number,
	): number[]

	/** Replaces an item within an array, or appends an item. The array must exist. To create an item, `appendArrayItem()` and `insertArrayItem()` are preferred. */
	setArrayItem (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array-type property name string. Can be a general path expression. */
		arrayName: string,
		/** Number. The 1-based position index at which to insert the new item. Use XMPConst.ARRAY_LAST_ITEM to replace the last existing item in the array. */
		itemIndex: number,
		/** String. The new item value string. Pass null for array items that do not have values. */
		itemValue: string,
		/**
		 * Optional. A flag that describes the new item, if it is being created. One of:
		 * - `0`: A simple item, the default.
		 * - `XMPConst.PROP_IS_ARRAY`: The item is an array (of type alt, bag, or seq).
		 * - `XMPConst.PROP_IS_STRUCT`: The item is a structure with nested fields.
		 */
		itemOptions?: 0 | XMPConst.PROP_IS_ARRAY | XMPConst.PROP_IS_STRUCT,
	): void

	/** Sets the text value for a specific language in an alternate-text array. Handles special cases for the x-default item. */
	setLocalizedText (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The name string of the alternate-text array. Can be a general path expression. */
		altTextName: string,
		/** The name of the generic language as an RFC 3066 primary subtag. Can be null or the empty string. */
		genericLang: string,
		/** The name of the specific language as an RFC 3066 primary subtag; for example, en-US. Must be specified. */
		specificLang: string,
		/** The new string value. */
		itemValue: string,
		/** Not used. */
		setOptions: any,
	): void

	/**
	 * Sets the value of a field within a structure-type property, or creates a new field if the named field does not exist in the structure,
	 * or creates a new structure containing the named field if the named structure does not exist.
	 */
	setStructField (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The name string of an existing structure. Can be a general path expression. */
		structName: string,
		/** The field type namespace string. See Schema namespace string constants. */
		fieldNS: XMPNamespaceAliasConstants,
		/** The field name string. Must be a simple XML name. */
		fieldName: string,
		/** The new field value string. Pass null for fields that do not have values. */
		fieldValue: string,
		/**
		 * Optional, option flags that describe a new structure. Used only if the structure is being created. One of:
		 * - `0` - A simple item, the default.
		 * - `XMPConst.PROP_IS_ARRAY` - The item is an array (of type alt, bag, or seq).
		 * - `XMPConst.PROP_IS_STRUCT` - The item is a structure with nested fields.
		*/
		options: 0 | XMPConst.PROP_IS_ARRAY | XMPConst.PROP_IS_STRUCT,
	): void

	/** Attaches a new qualifier to a metadata property. A qualifier can be added to a simple property, an array item, a struct field, or another qualifier. */
	setQualifier (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The name string of an existing property. Can be a general path expression. */
		propName: string,
		/** The URI of the qualifier namespace. Has the same URI and prefix usage as a schema namespace. */
		qualNS: string,
		/** String. The name of the qualifier. Must be a simple XML name. Has the same prefix usage as a property name. */
		qualName: string,
		/** The new qualifier value string. Pass null for qualifiers that do not have values. */
		qualValue: string,
		/**
		 * Optional, option flags that describe the qualifier. Used only if the qualifier is being created. One of:
		 * - `0` - A simple item, the default.
		 * - `XMPConst.PROP_IS_ARRAY` - The item is an array (of type alt, bag, or seq).
		 * - `XMPConst.PROP_IS_STRUCT` - The item is a structure with nested fields.
		 */
		options: 0 | XMPConst.PROP_IS_ARRAY | XMPConst.PROP_IS_STRUCT,
	): void

	/**
	 * Sets the value of a simple metadata property, creating the property if necessary, or creates a new array or structure property.
	 * For creating array and structure properties, setArrayItem() and setStructField() are preferred.
	 * Use this call to create or set top-level, simple properties, or after using the path-composition functions in the XMPUtils object.
	 */
	setProperty (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		
		/** The property name string. Can be a general path expression. */
		propName: string,
		
		/** The new property value string. Pass null to create an array or non-leaf level structure property. */
		propValue: string,
		
		/**
		 * Optional. The type of property to create, if the named property does not exist. Default is 0, a simple-valued property.
		 * Other constant values are:
		 * - `0` - A simple item, the default.
		 * - `XMPConst.PROP_IS_ARRAY` - The item is an array (of type alt, bag, or seq).
		 * - `XMPConst.PROP_IS_STRUCT` - The item is a structure with nested fields.
		 */
		setOptions?: 0 | XMPConst.PROP_IS_ARRAY | XMPConst.PROP_IS_STRUCT,
		/**
		 * Optional. The property data type. If supplied, the value is converted to this type. One of:
		 * - `XMPConst.STRING`
		 * - `XMPConst.INTEGER`
		 * - `XMPConst.NUMBER`
		 * - `XMPConst.BOOLEAN`
		 * - `XMPConst.XMPDATE`
		 */
		valueType?: XMPConst.STRING |	XMPConst.INTEGER | XMPConst.NUMBER | XMPConst.BOOLEAN | XMPConst.XMPDATE,
	): void

	/**
	 * Sorts the XMP contents alphabetically.
	 * 
	 * * At the top level, sorts namespaces by their prefixes.
	 * * Within a namespace, sorts top-level properties are sorted by name.
	 * * Within a struct, sorts fields by their qualified name (that is, the XML `prefix:local` form.)
	 * 
	 * Sorts unordered arrays of simple items by value.
	 * Sorts language alternative arrays by the `xml:lang` qualifiers, with the `"x-default"` item placed first.
	 */
	sort (): void
}

/**
 * This object is returned by `XMPFile.:ref:xmpfile-getpacketinfo`.
 * The read-only properties describe the XMP packet for the file represented by the XMPFile object.
 */
declare class XMPPacketInfo {
	/** 
	 * Number. The character encoding in the packet, one of:	
	 * - 0 - UTF8
	 * - 2 - UTF-16, MSB-first (big-endian)
	 * - 3 - UTF-16, LSB-first (little-endian)
	 * - 4 - UTF 32, MSB-first (big-endian)
	 * - 5 - UTF 32, LSB-first (little-endian)
	 */
	charForm: 0 | 2 | 3 | 4 | 5
	/** The length of the packet in bytes. */
	length: number
	/** The byte-offset from the start of the file where the packet begins. */
	offset: number
	/** The raw packet data. */
	packet: string
	/** The packet’s padding size in bytes, 0 if unknown. */
	padSize: number
	/** If true, the packet is writeable. */
	writeable: boolean
}

/**
 * This object is returned by various property accessor functions of the `XMPMeta` object, such as `:xmpmetaobj-getProperty`.
 * 
 * The read-only properties describe a metadata property.
 */
declare class XMPProperty {
	/** The language of the property value. This value is set by calls to `getLocalizedText()`, which assigns the language of the selected alternative text item, if an appropriate item is found. */
	locale: string
	/** The namespace of the property; see Schema namespace string constants. Typically used when browsing metadata with an `XMPIterator` object. */
	namespace: XMPNamespaceAliasConstants
	/**
	 * A constant that describes the property type, 0 for a simple property. Constants are:
	 * - `XMPConst.PROP_IS_ARRAY` - The property is an array (of type alt, bag, or seq).
	 * - `XMPConst.PROP_IS_STRUCT` - The property is a structure with nested fields.
	 */
	options: number
	/** The property path, including the property name. For a simple property, the entire path is the property name. */
	path: string
	/** The value of the property, if any. Arrays and non-leaf levels of structures do not have values. */
	value: any
}

/**
 * This class provides additional utility functions for the XMP Toolkit, layered upon the functionality of the `XMPMeta` object.
 * It has only static functions, you cannot create an instance.
 * 
 * Path-composition functions such as `composeArrayItemPath()`, provide support for composing path expressions to deeply nested properties,
 * which you can then pass to the accessor functions in `XMPMeta` object, such as `xmpmetaobj-getProperty`.
 * 
 * Higher-level functions such as `xmputils-duplicateSubtree` allow you to manipulate the metadata tree in an `XMPMeta` object.
 */
declare class XMPUtils {
	/**
	 * Copies properties from a source XMPMeta object and appends them to a destination XMPMeta object.
	 */
	static appendProperties (
		/** The source XMPMeta object. */
		source: XMPMeta,
		/** The destination XMPMeta object. */
		dest: XMPMeta,
		/**
		 * Option flags that control the copying operation. A logical OR of these bit-flag constants:
		 * - `XMPConst.APPEND_ALL_PROPERTIES` - Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties.
		 * - `XMPConst.APPEND_REPLACE_OLD_VALUES` - Replace the values of existing properties with the value from the source object. By default, existing values are retained. This applies to properties at all levels of hierarchy.
		 * - `XMPConst.APPEND_DELETE_EMPTY_VALUES` - Delete properties if the new value is empty.
		 */
		options: XMPConst.APPEND_ALL_PROPERTIES |	XMPConst.APPEND_REPLACE_OLD_VALUES | XMPConst.APPEND_DELETE_EMPTY_VALUES
		
	): void

	/**
	 * Concatenates a set of array item values into a single string. The resulting string can be separated back out into array items using `separateArrayItems()`.
	 * 
	 * Returns the concatenated String.
	 */
	catenateArrayItems (
		/** The XMPMeta object containing the array. */
		xmpObj: any,
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: any,
		/** The array property name string. Can be a general path expression. Each item in the array must be a simple string value. */
		arrayName: any,
		/** The string used to separate the items in the result string. Default is ‘; ‘, an ASCII semicolon and space (U+003B,U+0020). */
		separator: any,
		/** The character used to quote items that contain a separator. Default is ‘”’, an ASCII double quote (U+0022). */
		quotes: any,
		/**
		 * Option flag that controls the concatenation. This constant value:
		 * - `XMPConst.SEPARATE_ALLOW_COMMAS` - Allow commas in item values (such as “LastName, FirstName”).
		 * This option must be set the same way in this function and in `separateArrayItems()` to reconstruct the items correctly. */
		options: XMPConst.SEPARATE_ALLOW_COMMAS | 0,
	): string

	/**
	 * Creates and returns a string containing the path expression for an item in an array, using the registered prefix for the namespace, in the form:
	 * 
	 * `schemaNS:arrayName[itemIndex]`
	 */
	composeArrayItemPath (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array property name string. Can be a general path expression. */
		arrayName: string,
		/** Number. The 1-based position index of the item. Use `XMPConst.ARRAY_LAST_ITEM` to reference the last existing item in the array. In this case, the resulting path is `ns:arrayName[last()]`. */
		itemIndex: number | XMPConst.ARRAY_LAST_ITEM
	): string

	/**
	 * Creates and returns a string containing the path expression to select an alternate item by a field’s value, using the registered prefixes for the namespaces, in the form:
	 * 
	 * `schemaNS:arrayName[fieldNS:fieldName='fieldValue']`
	 */
	composeFieldSelector (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array property name string. Can be a general path expression. */
		arrayName: string,
		/** The field namespace URI string. */
		fieldNS: string,
		/** The field name. Must be a simple XML name. */
		fieldName: string,
		/** The desired field value. */
		fieldValue: string,
	): string

	/**
	 * Creates and returns a string containing the path expression to select an alternate item in an alt text array by language, using the registered prefix for the namespace, in the form:
	 * 
	 * `schemaNS:arrayName[@xml:lang='langName']`
	 * Returns a String.
	 * > Note: Do not use this in place of `getLocalizedText()` or `setLocalizedText()`.
	 * Those functions provide extra logic to choose the appropriate language and maintain consistency with the x-default value.
	 * This function provides a path expression for an explicit language, and only for that language.
	 */
	composeLanguageSelector (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array property name string. Can be a general path expression. */
		arrayName: string,
		/** The RFC3066 locale code string for the desired language. */
		locale: string,
	): string

	/**
	 * Creates and returns a string containing the path expression for a field in a structure, using the registered prefixes for the namespaces, in the form:
	 * 
	 * `schemaNS:structName/fieldNS:fieldName`
	 * Returns a String.
	 */
	composeStructFieldPath (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The structure property name string. Can be a general path expression. */
		structName: string,
		/** The field namespace URI string. */
		fieldNS: string,
		/** The field name. Must be a simple XML name. */
		fieldName: string,
	): string

	/**
	 * Creates and returns a string containing the path expression for a qualifier attached to a property, using the registered prefix for the namespace, in the form:
	 * 
	 * `schemaNS:propName/?qualNS:qualName`
	 * Returns a String.
	 */
	composeQualifierPath (
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The property name string. Can be a general path expression. */
		propName: string,
		/** The qualifier namespace URI string. */
		qualNS: string,
		/** The qualifier name. Must be a simple XML name. */
		qualName: string,
	): string

	/**
	 * Copies properties in the specified subtree from a source `XMPMeta` object and adds them into a destination `XMPMeta` object.
	 */
	duplicateSubtree (
		/** The source `XMPMeta` object. */
		source: XMPMeta,
		/** The destination `XMPMeta` object. */
		dest: XMPMeta,
		/** The source namespace URI string. See Schema namespace string constants. */
		sourceNS: XMPNamespaceAliasConstants,
		/** The property name string for the root location of the source subtree. Can be a general path expression. */
		sourceRoot: string,
		/** The destination namespace URI string. See Schema namespace string constants. */
		destNS: XMPNamespaceAliasConstants,
		/** Optional. The property name string for the root location of the destination subtree. Can be a general path expression. Default is the source root location. */
		destRoot: string,
		/**
		 * Option flags that control the copying operation. A logical OR of these bit-flag constants:
		 * - `XMPConst.APPEND_ALL_PROPERTIES` - Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties.
		 * - `XMPConst.APPEND_REPLACE_OLD_VALUES` - Replace the values of existing properties with the value from the source object. By default, existing values are retained.
		 * This applies to properties at all levels of hierarchy.
		 * - `XMPConst.APPEND_DELETE_EMPTY_VALUES` - Delete properties if the new value is empty.
		 * - Default is `0`.
		 */
		options: 0 | XMPConst.APPEND_ALL_PROPERTIES | XMPConst.APPEND_REPLACE_OLD_VALUES | XMPConst.APPEND_DELETE_EMPTY_VALUES,
	): void

	/**
	 * Removes multiple properties from an XMPMeta object.
	 * If both the namespace and property name are supplied, removes the property if it is external, even if it is an alias.
	 * If it is internal, removes it if the option `XMPConst.REMOVE_ALL_PROPERTIES` is specified.
	 * 
	 * If the namespace is supplied and the property name is not, removes all external properties in the namespace, and optionally all internal properties.
	 * Removes aliases only if the option `XMPConst.REMOVE_INCLUDE_ALIASES` is specified.
	 * 
	 * If neither the namespace nor the property name are supplied, removes all external properties, and optionally all internal properties.
	 * Aliases are handled implicitly, because the associated actual is removed.
	 */
	removeProperties (
		/** The XMPMeta object. */
		xmpObj: XMPMeta,
		/** Optional. The namespace URI string. See Schema namespace string constants. Must be supplied if a property name is supplied. */
		schemaNS: XMPNamespaceAliasConstants,
		/** Optional. The property name string. Can be a general path expression. */
		propName: string,
		/** Option flags that control the deletion operation. A logical OR of these bit-flag constants:
		 * - XMPConst.REMOVE_ALL_PROPERTIES - Remove internal and external properties. By default, removes only external properties. Applies only to top-level properties.
		 * - XMPConst.REMOVE_INCLUDE_ALIASES - Remove aliases defined in the namespace. If the property name is supplied, removes it regardless of this option.
		 * - Default is 0.
		 */
		options: 0 | XMPConst.REMOVE_ALL_PROPERTIES | XMPConst.REMOVE_INCLUDE_ALIASES,
	): void

	/**
	 * Updates individual array item strings in the `XMPMeta` object from a concatenated string returned by `catenateArrayItems()`.
	 * Recognizes a large set of separator characters, including semicolons, commas, tab, return, linefeed, and multiple spaces.
	 */
	separateArrayItems (
		/** The XMPMeta object containing the array. */
		xmpObj: XMPMeta,
		/** The namespace URI string. See Schema namespace string constants. */
		schemaNS: XMPNamespaceAliasConstants,
		/** The array property name string. Can be a general path expression. Each item in the array must be a simple string value. */
		arrayName: string,
		/**
		 * Option flags that control how the array property is updated from the separated string. A logical OR of these bit-flag constants:
		 * - XMPConst.APPEND_ALL_PROPERTIES - Include both internal and external properties. By default, copies only external properties. This applies only to top-level properties.
		 * - XMPConst.APPEND_REPLACE_OLD_VALUES - Replace the values of existing properties with the value from the source object. By default, existing values are retained.
		 * This applies to properties at all levels of hierarchy.
		 * - XMPConst.APPEND_DELETE_EMPTY_VALUES - Delete properties if the new value is empty.
		 * - XMPConst.SEPARATE_ALLOW_COMMAS - Allow commas in item values. If not specified, an item containing a comma (such as “LastName, FirstName”) is separated into two array items.
		 * - Default is 0. */
		arrayOptions: 0 | XMPConst.APPEND_ALL_PROPERTIES | XMPConst.APPEND_REPLACE_OLD_VALUES | XMPConst.APPEND_DELETE_EMPTY_VALUES | XMPConst.SEPARATE_ALLOW_COMMAS,
		/** The string containing the concatenated array values, as returned by catenateArrayItems(). */
		concatString: string,
	): void
}

/*
	"// * Making an array which contains object elements with properties."
	var theFile = File("~/Desktop/test.psd");
	if (xmpLib==undefined) var xmpLib = new ExternalObject('lib:AdobeXMPScript');  
	var xmpFile = new XMPFile(theFile.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_UPDATE);  
	var xmpPackets = xmpFile.getXMP();  
	var mt = new XMPMeta(xmpPackets.serialize());
	XMPMeta.registerNamespace("http://ns.my-special-namespace/1.0/", "myNs:");

	var x = { name : "ABC", width : 50, height : 100 };
	mt.setProperty("http://ns.my-special-namespace/1.0/", "mySpecialArray", "", XMPConst.PROP_IS_ARRAY);

	mt.appendArrayItem("http://ns.my-special-namespace/1.0/", "mySpecialArray", null, XMPConst.PROP_IS_STRUCT);
	mt.setStructField("http://ns.my-special-namespace/1.0/", "mySpecialArray[1]", XMPConst.NS_RDF, "name", x.name);
	mt.setStructField("http://ns.my-special-namespace/1.0/", "mySpecialArray[1]", XMPConst.NS_RDF, "width", x.width);
	mt.setStructField("http://ns.my-special-namespace/1.0/", "mySpecialArray[1]", XMPConst.NS_RDF, "height", x.height);

	if (xmpFile.canPutXMP(xmpPackets)) {
		xmpFile.putXMP(mt);
	}
	xmpFile.closeFile(XMPConst.CLOSE_UPDATE_SAFELY);
*/