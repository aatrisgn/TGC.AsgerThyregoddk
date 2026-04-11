resource "azurerm_dns_zone" "dns_zone" {
  name                = "asgerthyregod.dk"
  resource_group_name = data.azurerm_resource_group.predefined_resource_group.name

  lifecycle {
    prevent_destroy = true
  }
}

resource "azurerm_dns_a_record" "apex" {
  ttl                 = 3600
  name                = "*"
  records             = ["137.117.132.68"]
  zone_name           = azurerm_dns_zone.dns_zone.name
  resource_group_name = data.azurerm_resource_group.predefined_resource_group.name
}

resource "azurerm_dns_a_record" "dev" {
  ttl                 = 3600
  name                = "dev"
  records             = ["137.117.132.68"]
  zone_name           = azurerm_dns_zone.dns_zone.name
  resource_group_name = data.azurerm_resource_group.predefined_resource_group.name
}

resource "azurerm_dns_a_record" "tst" {
  ttl                 = 3600
  name                = "tst"
  records             = ["137.117.132.68"]
  zone_name           = azurerm_dns_zone.dns_zone.name
  resource_group_name = data.azurerm_resource_group.predefined_resource_group.name
}
