# Regions and Districts in Ghana

 Regions, and their districts and capitals in Ghana
 ## Description
 A single endpoint returning a json-formatted response of Ghana's regions and their districts with corresponding capital.
 
 ## Usage
 ```
EDNPOINT: https://ghana-regions.herokuapp.com
 
 REQUEST METHOD: GET
```

 ### Url Params
 `/regions`
 
 Lists all regions with their districts and capitals
 
 `/regions/{region_code}`
 
 List districts of a specific region
 

 > Please see `codes.txt` for region codes
  
  ## Response
  Details of response data
  ### Model
 
```typescript
interface district {
    code: string
    label: string
    category: string
    capital: string
}
interface region {
    code: string
    label: string
    capital: string
    districts: Array<district>
}

```

### Sample Request Responses

**All Regions**

`https://ghana-regions.herokuapp.com/regions`

```json

{
"status": true,
"regions": [
    {
      "code": "AR",
      "label": "Ahafo Region",
      "capital": "Goaso",
      "districts": [
       {
      "code": "ASN",
      "label": "Asunafo North",
      "category": "Municipal",
      "capital": "Goaso"
       }
      ]
    }
],
"details": {
"total_regions": 4,
"total_districts": 73
}

}
```

**Specific Region**

`https://ghana-regions.herokuapp.com/regions/ar`

*region code can be uppercase or lowercase*

```json

{
"status": true,
"regions": {
"code": "AR",
"label": "Ahafo Region",
"capital": "Goaso",
"districts": [
{
"code": "ASN",
"label": "Asunafo North",
"category": "Municipal",
"capital": "Goaso"
},
{
"code": "ASS",
"label": "Asunafo South",
"category": "District",
"capital": "Kukuom"
}
]
},
"details": {
"total_regions": 1,
"total_districts": 6
}
}
```

## Installation

- Clone project or download and extract zip

 ```shell script
    git remote add my_awesome_regions https://github.com/brvhprince/regions-districts-in-ghana.git
   ``` 
- Run
    
    ```shell script
    yarn install
  ``` 
    
    use npm if preferred
 
 - Start development server
 
    ```shell script
     yarn dev
   ``` 
  
- Build for production

    ```shell script
     yarn build
   ``` 

- Start production server

 ```shell script
     yarn start
   ``` 

## Reference Link
https://en.wikipedia.org/wiki/Districts_of_Ghana#List_of_Districts
