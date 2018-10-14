import os


class Config:
    ''' The config class provides defaults for all configuration options. As
        such, it also acts as an exhaustive list of all such options. '''
    SECRET_KEY = 'secret'


class TestingConfig(Config):
    pass


class DevelopmentConfig(Config):
    pass


class ProductionConfig(Config):
    pass


config = {
    'testing': TestingConfig,
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'default': DevelopmentConfig
}
