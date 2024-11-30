SELECT G.Title AS title, 
    ROUND(G.Price * (1 - I.Discount), 2) AS price, GP.image,
GROUP_CONCAT(L.Platform SEPARATOR ', ') AS platforms
FROM Inventories I 
LEFT JOIN Games G ON I.gid = G.gid
LEFT JOIN GamePhotos GP ON GP.gid = G.gid 
LEFT JOIN Platforms P ON P.gid = G.gid
LEFT JOIN PlatformList L ON P.plat_id = L.plat_id
WHERE I.Sid = 1 
GROUP BY I.gid, G.Price, I.Discount, GP.image;

SELECT  S.store_name AS name, S.modality, 
        CONCAT_WS(', ', Street, City, State, Zip, Country) AS address
FROM Stores S
WHERE sid = 1;

SELECT * FROM StoreHours
WHERE sid = 1;