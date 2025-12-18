/**
 * Event Data Merger Utility
 * Merges custom event content with live API data
 */

/**
 * Merge custom event data with API data
 * Custom data takes precedence for content/presentation
 * API data takes precedence for live info (prices, tickets)
 * 
 * @param {Object} apiData - Event data from Billetto API
 * @param {Object} customData - Custom event content
 * @returns {Object} Merged event object
 */
export function mergeEventData(apiData, customData) {
    // If no custom data, return API data as-is
    if (!customData) return apiData;

    // If no API data, return custom data as-is
    if (!apiData) return customData;

    // Merge with custom data taking precedence for content
    return {
        ...apiData,

        // Custom content overrides (for creative control)
        title: customData.title || apiData.title,
        description: customData.customDescription || customData.description || apiData.description,
        image: customData.customImage || customData.image || apiData.image,
        lineup: customData.lineup || apiData.lineup || [],
        venue: customData.venue || apiData.venue,

        // Custom sections (additional content)
        sections: customData.sections || [],

        // Live API data takes precedence (always current)
        price: apiData.price || customData.price,
        ticketLink: apiData.ticketLink || customData.ticketLink,

        // Date/time - you can choose which takes precedence
        // Using API by default for accuracy, but can be overridden
        date: apiData.date || customData.date,
        time: apiData.time || customData.time,
        location: apiData.location || customData.location,
        address: apiData.address || customData.address,
        city: apiData.city || customData.city,

        // Metadata
        isCustom: !!customData,
        hasApiData: !!apiData,
    };
}

/**
 * Check if an event has custom content
 * @param {Object} event - Event object
 * @returns {boolean}
 */
export function hasCustomContent(event) {
    return event?.isCustom === true;
}

/**
 * Check if an event has live API data
 * @param {Object} event - Event object
 * @returns {boolean}
 */
export function hasLiveData(event) {
    return event?.hasApiData === true;
}
