import executeQuery from "@/database/mysqldb";

/**
 * Update user details in the database.
 * @param storeId Store's ID
 * @param updateData Fields to update
 * @returns Boolean indicating success or failure
 */
export const updateHours = async (storeId: number, day: string, updateData: Record<string, unknown>): Promise<boolean> => {
    try {
        interface QueryResult {
            affectedRows: number;
        }
        
        const fields = Object.keys(updateData).map((key) => `${key} = ?`).join(", ");  
        const values = Object.values(updateData);
        const query = `
            UPDATE StoreHours
            SET ${fields}
            WHERE day = ? AND sid = ?;
        `;
       
        const result = await executeQuery(query, [...values, day, storeId]) as QueryResult;
        return result.affectedRows > 0;
    } catch (error) {
        console.error("Error updating store details:", error);
        return false;
    }
};