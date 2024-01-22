# DefaultApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**advancedSearchPost**](DefaultApi.md#advancedSearchPost) | **POST** /advanced_search | Perform an advanced search for players |
| [**compPlayersPost**](DefaultApi.md#compPlayersPost) | **POST** /comp_players |  |
| [**countryGet**](DefaultApi.md#countryGet) | **GET** /country | Get the list of countries |
| [**getBirthYearsGet**](DefaultApi.md#getBirthYearsGet) | **GET** /get_birth_years | Get the list of player birth years |
| [**getRoleGet**](DefaultApi.md#getRoleGet) | **GET** /get_role | Get the list of player roles |
| [**infoCompetitionPost**](DefaultApi.md#infoCompetitionPost) | **POST** /info_competition |  |
| [**infoPlayerPost**](DefaultApi.md#infoPlayerPost) | **POST** /info_player |  |
| [**listCompetitionsGet**](DefaultApi.md#listCompetitionsGet) | **GET** /list_competitions | Get the list of competitions |
| [**listInfoSquadPost**](DefaultApi.md#listInfoSquadPost) | **POST** /list_info_squad | Get information about a squad |
| [**listTeamsbycompetitionPost**](DefaultApi.md#listTeamsbycompetitionPost) | **POST** /list_teamsbycompetition | Get the list of teams for a given competition |
| [**loadHPGet**](DefaultApi.md#loadHPGet) | **GET** /loadHP | Load the Home page with the recent games |
| [**loadSqPost**](DefaultApi.md#loadSqPost) | **POST** /loadSq | Post historical matches for a squad |
| [**rootGet**](DefaultApi.md#rootGet) | **GET** / | Get the login page |
| [**seasonsGet**](DefaultApi.md#seasonsGet) | **GET** /seasons | Get the list of seasons |
| [**squadPlayersPost**](DefaultApi.md#squadPlayersPost) | **POST** /squad_players | Get players of a squad |
| [**squadStatsPost**](DefaultApi.md#squadStatsPost) | **POST** /squad_stats | Get stats of a squad |
| [**valuesPlayerPost**](DefaultApi.md#valuesPlayerPost) | **POST** /values_player | Route that takes the player name string from the Axios call and sends it to the Flask server. Returns an HTML file with the chart. |


<a name="advancedSearchPost"></a>
# **advancedSearchPost**
> advancedSearchPost(searchDTO)

Perform an advanced search for players

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    SearchDTO searchDTO = new SearchDTO(); // SearchDTO | 
    try {
      apiInstance.advancedSearchPost(searchDTO);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#advancedSearchPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **searchDTO** | [**SearchDTO**](SearchDTO.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Advanced search results retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="compPlayersPost"></a>
# **compPlayersPost**
> compPlayersPost(compPlayersRequest)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    CompPlayersRequest compPlayersRequest = new CompPlayersRequest(); // CompPlayersRequest | 
    try {
      apiInstance.compPlayersPost(compPlayersRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#compPlayersPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **compPlayersRequest** | [**CompPlayersRequest**](CompPlayersRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of players for the competition retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="countryGet"></a>
# **countryGet**
> countryGet()

Get the list of countries

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.countryGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#countryGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of countries retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="getBirthYearsGet"></a>
# **getBirthYearsGet**
> getBirthYearsGet()

Get the list of player birth years

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.getBirthYearsGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#getBirthYearsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of player birth years retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="getRoleGet"></a>
# **getRoleGet**
> getRoleGet()

Get the list of player roles

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.getRoleGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#getRoleGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of player roles retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="infoCompetitionPost"></a>
# **infoCompetitionPost**
> infoCompetitionPost(infoCompetitionRequest)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    InfoCompetitionRequest infoCompetitionRequest = new InfoCompetitionRequest(); // InfoCompetitionRequest | 
    try {
      apiInstance.infoCompetitionPost(infoCompetitionRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#infoCompetitionPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **infoCompetitionRequest** | [**InfoCompetitionRequest**](InfoCompetitionRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Information about the competition retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="infoPlayerPost"></a>
# **infoPlayerPost**
> infoPlayerPost(playerInfoRequest)



### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    PlayerInfoRequest playerInfoRequest = new PlayerInfoRequest(); // PlayerInfoRequest | 
    try {
      apiInstance.infoPlayerPost(playerInfoRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#infoPlayerPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **playerInfoRequest** | [**PlayerInfoRequest**](PlayerInfoRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Information about the player retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="listCompetitionsGet"></a>
# **listCompetitionsGet**
> listCompetitionsGet()

Get the list of competitions

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.listCompetitionsGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#listCompetitionsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of competitions retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="listInfoSquadPost"></a>
# **listInfoSquadPost**
> listInfoSquadPost(loadSqPostRequest)

Get information about a squad

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    LoadSqPostRequest loadSqPostRequest = new LoadSqPostRequest(); // LoadSqPostRequest | 
    try {
      apiInstance.listInfoSquadPost(loadSqPostRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#listInfoSquadPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loadSqPostRequest** | [**LoadSqPostRequest**](LoadSqPostRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Information about the squad retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="listTeamsbycompetitionPost"></a>
# **listTeamsbycompetitionPost**
> listTeamsbycompetitionPost(listTeamsbycompetitionPostRequest)

Get the list of teams for a given competition

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ListTeamsbycompetitionPostRequest listTeamsbycompetitionPostRequest = new ListTeamsbycompetitionPostRequest(); // ListTeamsbycompetitionPostRequest | 
    try {
      apiInstance.listTeamsbycompetitionPost(listTeamsbycompetitionPostRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#listTeamsbycompetitionPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listTeamsbycompetitionPostRequest** | [**ListTeamsbycompetitionPostRequest**](ListTeamsbycompetitionPostRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of teams for the competition retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="loadHPGet"></a>
# **loadHPGet**
> loadHPGet()

Load the Home page with the recent games

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.loadHPGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#loadHPGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Recent games retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="loadSqPost"></a>
# **loadSqPost**
> loadSqPost(loadSqPostRequest)

Post historical matches for a squad

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    LoadSqPostRequest loadSqPostRequest = new LoadSqPostRequest(); // LoadSqPostRequest | 
    try {
      apiInstance.loadSqPost(loadSqPostRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#loadSqPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loadSqPostRequest** | [**LoadSqPostRequest**](LoadSqPostRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Squad matches posted successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="rootGet"></a>
# **rootGet**
> rootGet()

Get the login page

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.rootGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#rootGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Login page retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="seasonsGet"></a>
# **seasonsGet**
> seasonsGet()

Get the list of seasons

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    try {
      apiInstance.seasonsGet();
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#seasonsGet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of seasons retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="squadPlayersPost"></a>
# **squadPlayersPost**
> squadPlayersPost(squadPlayersRequest)

Get players of a squad

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    SquadPlayersRequest squadPlayersRequest = new SquadPlayersRequest(); // SquadPlayersRequest | 
    try {
      apiInstance.squadPlayersPost(squadPlayersRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#squadPlayersPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **squadPlayersRequest** | [**SquadPlayersRequest**](SquadPlayersRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Players of the squad retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="squadStatsPost"></a>
# **squadStatsPost**
> squadStatsPost(squadStatsRequest)

Get stats of a squad

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    SquadStatsRequest squadStatsRequest = new SquadStatsRequest(); // SquadStatsRequest | 
    try {
      apiInstance.squadStatsPost(squadStatsRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#squadStatsPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **squadStatsRequest** | [**SquadStatsRequest**](SquadStatsRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Players of the squad retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

<a name="valuesPlayerPost"></a>
# **valuesPlayerPost**
> valuesPlayerPost(valuesPlayerPostRequest)

Route that takes the player name string from the Axios call and sends it to the Flask server. Returns an HTML file with the chart.

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    ValuesPlayerPostRequest valuesPlayerPostRequest = new ValuesPlayerPostRequest(); // ValuesPlayerPostRequest | 
    try {
      apiInstance.valuesPlayerPost(valuesPlayerPostRequest);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#valuesPlayerPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **valuesPlayerPostRequest** | [**ValuesPlayerPostRequest**](ValuesPlayerPostRequest.md)|  | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | HTML chart page retrieved successfully |  -  |
| **500** | Internal Server Error |  -  |

